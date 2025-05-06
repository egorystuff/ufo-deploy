import { useUserStore } from "@/store/store";
import { Typography, Button, Box } from "@mui/material";

export const MeasurementSystem = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const handleNext = (system) => {
    updateUserData("measurementSystem", system);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        What measurement units do you prefer?
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button
          variant='contained'
          fullWidth
          onClick={() => handleNext("metric")}
          className='survey-select-button'
          sx={{ mb: 2 }}>
          Metric (m, kg)
        </Button>

        <Button variant='contained' fullWidth onClick={() => handleNext("imperial")} className='survey-select-button'>
          Imperial (ft, lb)
        </Button>
      </Box>
    </div>
  );
};
