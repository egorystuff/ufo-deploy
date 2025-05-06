import { Typography, Box, Button } from "@mui/material";
import { useSurveyCheckboxSelection } from "@/hooks/useSurveyCheckboxSelection";
import { CustomCheckbox } from "./CustomCheckbox";

export const CheckboxList = ({
  title,
  subtitle = "",
  buttonText = "",
  options,
  onNext,
  updateUserDataKey,
  updateUserData,
}) => {
  const { selectedOptions, handleCheckboxChange } = useSurveyCheckboxSelection();

  const handleNext = () => {
    if (updateUserData && updateUserDataKey) {
      updateUserData(updateUserDataKey, selectedOptions);
    }
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (selectedOptions.length > 0) {
        handleNext();
      } else if (buttonText) {
        onNext();
      }
    }
  };

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant='h6' align='left' className='survey-subtitle'>
            {subtitle}
          </Typography>
        )}

        <Box sx={{ mt: 2 }}>
          {options.map((option) => (
            <CustomCheckbox
              key={option}
              option={option}
              isChecked={selectedOptions.includes(option)}
              onChange={handleCheckboxChange}
            />
          ))}
        </Box>
      </div>

      {selectedOptions.length > 0 ? (
        <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
          Next
        </Button>
      ) : (
        buttonText && (
          <Button variant='contained' fullWidth onClick={onNext} className='secondary-button'>
            {buttonText}
          </Button>
        )
      )}
    </div>
  );
};
