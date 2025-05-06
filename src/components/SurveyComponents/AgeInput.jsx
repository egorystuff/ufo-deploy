import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const AgeInput = ({ onNext }) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateUserData = useUserStore((state) => state.updateUserData);

  const handleNext = () => {
    const ageNumber = parseInt(age, 10);

    if (!age) {
      setError(true);
      setErrorMessage("Please enter your age from 18 to 40.");
      return;
    }

    if (ageNumber < 18 || ageNumber > 40) {
      setError(true);
      setErrorMessage("Please enter a valid age between 18 and 40.");
      return;
    }

    setError(false);
    setErrorMessage("");
    updateUserData("age", ageNumber);
    onNext();
  };

  const handleFocus = () => {
    setError(false);
    setErrorMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 450 }}>
          How old are you?
        </Typography>

        <Typography variant='h6' align='left' className='survey-subtitle'>
          We ask this to personalize UFO program for you.
        </Typography>

        <SurveyInput
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            setError(false);
          }}
          onFocus={handleFocus}
          placeholder='Enter your age'
          error={error}
          helperText={errorMessage}
          inputProps={{
            min: 18,
            max: 40,
          }}
          label='years'
        />
      </div>

      <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
        Next
      </Button>
    </div>
  );
};
