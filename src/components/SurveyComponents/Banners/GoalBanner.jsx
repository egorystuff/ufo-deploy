import { Box, Button, Typography } from "@mui/material";
import WeightLossChart from "@components/SurveyComponents/Banners/WeightLossChart.jsx";
import CheckIcon from "@mui/icons-material/Check";
import { useUserStore } from "@/store/store.js";
import { useNavigate } from "react-router-dom";

export const GoalBanner = () => {
  const idealWeight = useUserStore((state) => state.idealWeight);
  const userWeight = useUserStore((state) => state.weight);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/subscribe");
  };

  const currentUnixTimestamp = Math.floor(Date.now() / 1000);

  const weightDifference = userWeight - idealWeight;
  const weeksRequired = weightDifference / 0.5;

  const targetUnixTimestamp = currentUnixTimestamp + weeksRequired * 7 * 24 * 60 * 60;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 16px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          marginBottom: "24px",
        }}>
        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "14px",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: "130%",
          }}>
          THE LAST EFFORT TO CHANGE LIFESTYLE YOU NEED
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "44px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            We predict you’ll be
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "120%",
              textAlign: "center",
            }}>
            {idealWeight} kg by {new Date(targetUnixTimestamp * 1000).toLocaleDateString()}
          </Typography>
        </Box>
        <WeightLossChart
          startDateUnix={currentUnixTimestamp}
          startWeight={userWeight}
          endDateUnix={targetUnixTimestamp}
          targetWeight={idealWeight}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#FF5C1D",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "130%",
            }}>
            Great news!
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "14px",
              fontWeight: "450",
              lineHeight: "130%",
              textAlign: "left",
            }}>
            Based on UFO users like you we predict you’ll be able to hit your weight loss goal by August 24.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          border: "0.4px solid #DFDFDF",
          padding: "16px",
          marginBottom: "50px",
        }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll understand the reasons for your eating behavior
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll build harmonious relationships with yourself
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll build new healthy habits
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll feel better
          </Typography>
        </Box>
      </Box>
      <Button variant='contained' fullWidth onClick={handleClick} className='survey-next-button'>
        Next
      </Button>
    </Box>
  );
};
