import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const WeeklyActivities = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    {
      label: "Sedentary lifestyle (office work without workouts)",
      value: "sedentary",
      coefficient: "1.2x",
    },
    {
      label: "Light activity (1-3 workouts per week)",
      value: "lightly_active",
      coefficient: "1.375x",
    },
    {
      label: "Moderate activity (3-5 workouts)",
      value: "moderately_active",
      coefficient: "1.55x",
    },
    {
      label: "High activity (6-7 workouts)",
      value: "very_active",
      coefficient: "1.725x",
    },
    {
      label: "Extreme activity (physically demanding job + workouts)",
      value: "extremely_active",
      coefficient: "1.9x",
    },
  ];

  const handleNext = (value) => {
    updateUserData("weeklyActivities", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main" }}>
        Which best describes your weekly activities?
      </Typography>

      <Box sx={{ mt: 3 }}>
        {options.map((option) => (
          <BaseSelectButton key={option.value} onClick={() => handleNext(option.value)} rightText={option.coefficient}>
            {option.label}
          </BaseSelectButton>
        ))}
      </Box>
    </div>
  );
};
