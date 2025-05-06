import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const arrayTitle = ["Demographic profile", "Goal setting", "Experience", "Preferences", "Health info"];

export const SurveyHeader = ({ indexTitle, indexSubTitle, onBack }) => {
  return (
    <Toolbar sx={{ width: "100%", position: "relative" }}>
      {indexSubTitle > 0 && (
        <IconButton
          aria-label='delete'
          onClick={onBack}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              borderRadius: "4px",
            },
            position: "absolute",
            left: 0,
            color: "primary.main",
          }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
        </IconButton>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <Typography
          variant='h6'
          component='div'
          textTransform='uppercase'
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "primary.main",
          }}>
          {arrayTitle[indexTitle]}
        </Typography>
      </Box>
    </Toolbar>
  );
};
