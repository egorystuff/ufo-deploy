import { Typography, Box } from "@mui/material";

export const CustomCheckbox = ({ option, isChecked, onChange }) => {
  return (
    <Box className='custom-checkbox' onClick={() => onChange(option)}>
      <Box className={`checkbox-icon ${isChecked ? "checked" : ""}`}>
        {isChecked && (
          <svg width='20' height='20' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 5C11.72 5 11.47 5.11 11.29 5.29L7 9.59L4.71 7.29C4.53 7.11 4.28 7 4 7C3.45 7 3 7.45 3 8C3 8.28 3.11 8.53 3.29 8.71L6.29 11.71C6.47 11.89 6.72 12 7 12C7.28 12 7.53 11.89 7.71 11.71L12.71 6.71C12.89 6.53 13 6.28 13 6C13 5.45 12.55 5 12 5Z'
              fill='white'
            />
          </svg>
        )}
      </Box>

      <Typography className='checkbox-label'>{option}</Typography>
    </Box>
  );
};
