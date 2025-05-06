import { useUserStore } from "@/store/store";
import { Typography, Button, Box } from "@mui/material";

export const GenderSelection = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const handleNext = (gender) => {
    updateUserData("gender", gender);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        What measurement units do you prefer?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle'>
        Biological sex can affect many physical elements, like hormones or metabolism, so we use it in our calculations.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button
          variant='contained'
          fullWidth
          onClick={() => handleNext("male")}
          className='survey-select-button'
          sx={{ mb: 1 }}>
          Male
        </Button>

        <Button variant='contained' fullWidth onClick={() => handleNext("female")} className='survey-select-button'>
          Female
        </Button>
      </Box>
    </div>
  );
};
