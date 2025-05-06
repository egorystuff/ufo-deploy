// components/ResearchNote.tsx
import { Typography, Box, SvgIcon } from "@mui/material";

const ThumbUpIcon = () => (
  <SvgIcon viewBox='0 0 24 24' sx={{ color: "#FF5C1D", fontSize: "1.5rem" }}>
    <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z' />
  </SvgIcon>
);

export const ResearchNote = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mt: 3,
      }}>
      <Box sx={{ mt: "4px" }}>
        <ThumbUpIcon />
      </Box>
      <Box>
        <Typography variant='body1' fontWeight={500} color='primary.main' align='left' fontSize={18}>
          People using UFO for 3 months lose twice as much weight as for 1 month *
        </Typography>
        <Typography variant='body1' align='left' fontSize={16} color='#7F6FA4'>
          *According to UFO user research, 2024
        </Typography>
      </Box>
    </Box>
  );
};
