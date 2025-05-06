import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const FastFoodConsumptionFrequency = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "A lot!", value: "A lot!" },
    { label: "1-2 times a week", value: "1-2 times a week" },
    { label: "Occasionally as a treat", value: "Occasionally as a treat" },
    { label: "I try to avoid them", value: "I try to avoid them" },
  ];

  const handleNext = (value) => {
    updateUserData("fastFoodTime", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        How recent do you eat fast food and high sugar products?
      </Typography>

      <Box sx={{ mt: 3 }}>
        {options.map((option) => (
          <BaseSelectButton key={option.value} onClick={() => handleNext(option.value)}>
            {option.label}
          </BaseSelectButton>
        ))}
      </Box>
    </div>
  );
};
