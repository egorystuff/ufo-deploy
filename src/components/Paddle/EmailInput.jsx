import { useState, useRef, useEffect } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { useUserStore } from "@/store/store";
import { UfoLogo } from "./UfoLogo";

export const EmailInput = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const updateUserData = useUserStore((state) => state.updateUserData);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    setIsValidEmail(validateEmail(email.trim()));
  }, [email]);

  const handleNext = () => {
    if (!isValidEmail) return;

    const trimmedEmail = email.trim();
    updateUserData("email", trimmedEmail);
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isValidEmail) {
      handleNext();
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <UfoLogo />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#50B671",
          padding: "8px 16px",
          marginBottom: "24px",
          marginLeft: "-20px",
          marginRight: "-20px",
          width: "calc(100% + 40px)",
        }}>
        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='1' y='1' width='28' height='28' rx='14' fill='#50B671' />
          <rect x='1' y='1' width='28' height='28' rx='14' stroke='white' strokeWidth='2' />
          <path
            d='M13.364 19.193L22.556 10L23.971 11.414L13.364 22.021L7 15.657L8.414 14.243L13.364 19.193Z'
            fill='#F5F5F5'
          />
        </svg>

        <Typography variant='body1' sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "18px" }}>
          Your personalised plan is ready
        </Typography>
      </Box>

      <div>
        <Typography variant='h5' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 500 }}>
          Enter your email to get your personal weight loss plan
        </Typography>
      </div>

      <div className='email-input'>
        <div className='input-wrapper'>
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
          />
        </div>
      </div>

      <Button
        variant='contained'
        fullWidth
        onClick={handleNext}
        className='email-button'
        sx={{
          mt: 3,
          backgroundColor: "#FF5C1D",
          "&:hover": {
            backgroundColor: "#FF4500",
          },
          "&:disabled": {
            backgroundColor: "#FF8D63",
            color: "white",
          },
        }}
        disabled={!isValidEmail}>
        See my plan
      </Button>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "24px" }}>
        <Typography
          variant='body1'
          align='left'
          color='#999999'
          sx={{ fontWeight: 450, fontSize: "18px", lineHeight: 1.2 }}>
          By submitting your email address, you may also receive email offers from Simple about our services. You may
          unsubscribe at any time.
        </Typography>

        <Typography
          variant='body1'
          align='left'
          color='#999999'
          sx={{ fontWeight: 450, fontSize: "18px", lineHeight: 1.2 }}>
          Your use of Simple is bound by the{" "}
          <Link href='#' underline='always' color='inherit'>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href='#' underline='always' color='inherit'>
            Privacy Policy
          </Link>
          .
        </Typography>
      </div>
    </div>
  );
};
