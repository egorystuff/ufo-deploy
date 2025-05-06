import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const IdealWeight = ({ onNext }) => {
  const [idealWeight, setIdealWeight] = useState("");
  const [errorMessage, setErrorMessage] = useState("Goal cannot be accepted");
  const userWeight = useUserStore((state) => state.weight);
  const userHeight = useUserStore((state) => state.height);

  const updateUserData = useUserStore((state) => state.updateUserData);
  const measurementSystem = useUserStore((state) => state.measurementSystem);

  const isMetric = measurementSystem === "metric";
  const poundsToKg = (pounds) => Math.round(pounds * 0.453592);

  const calculateNormalWeightRange = (heightCm) => {
    const heightM = heightCm / 100;
    const minWeight = 18.5 * heightM * heightM;
    const maxWeight = 24.9 * heightM * heightM;
    return { minWeight, maxWeight };
  };

  const { minWeight, maxWeight } = calculateNormalWeightRange(userHeight);

  const validateWeight = (weightValue) => {
    const currentWeight = isMetric ? userWeight : userWeight * 2.20462;

    if (!weightValue || weightValue > currentWeight) {
      return "Goal cannot be accepted";
    }
    return "Goal accepted!";
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setIdealWeight(value);

    const weightValue = parseFloat(value);
    if (isNaN(weightValue) || weightValue > userWeight) {
      setErrorMessage("Goal cannot be accepted");
    } else {
      setErrorMessage("Goal accepted!");
    }
  };

  const handleNext = () => {
    const weightValue = parseFloat(idealWeight);
    const validationMessage = validateWeight(weightValue);

    if (validationMessage === "Goal cannot be accepted") {
      return;
    }

    const weightInKg = isMetric ? weightValue : poundsToKg(weightValue);
    updateUserData("idealWeight", weightInKg);
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  const isButtonDisabled = !idealWeight || errorMessage === "Goal cannot be accepted";

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 450 }}>
          What is your ideal weight that you want to reach?
        </Typography>

        <SurveyInput
          value={idealWeight}
          onChange={handleWeightChange}
          placeholder={isMetric ? "Enter your weight in kg" : "Enter your weight in lbs (e.g., 180)"}
          error={errorMessage === "Goal cannot be accepted"}
          helperText={errorMessage}
          inputProps={{
            min: isMetric ? Math.round(minWeight) : Math.round(minWeight * 2.20462),
            step: isMetric ? "1" : "0.1",
          }}
          label={isMetric ? "kg" : "lbs"}
        />

        <div style={{ marginTop: "24px" }}>
          <Typography variant='h6' align='left' className='survey-subtitle'>
            We are checking your data for compliance with the World Health Organization&apos;s safety standards.
          </Typography>
        </div>

        <Box sx={{ mt: 5, p: 2, backgroundColor: "#F5F5F5", borderRadius: "12px", border: "0.4px solid #DFDFDF" }}>
          <Typography variant='h6' sx={{ color: "primary.main", lineHeight: "1.2", marginBottom: "16px" }}>
            Recommended weight range:
            <br />
            {isMetric
              ? `${Math.round(minWeight)} - ${Math.round(maxWeight)} kg`
              : `${Math.round(minWeight * 2.20462)} - ${Math.round(maxWeight * 2.20462)} lbs`}
            <br />
          </Typography>

          <Typography variant='h6' align='justify' className='survey-subtitle'>
            Using data from UFO users, we will predict when you will hit your target weight if you follow your custom
            meal plan and personal course. A healthy lifestyle will allow you to lose 0.5 - 1 kg per week in a natural
            manner.
          </Typography>
        </Box>
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
        disabled={isButtonDisabled}>
        Next
      </Button>
    </div>
  );
};
