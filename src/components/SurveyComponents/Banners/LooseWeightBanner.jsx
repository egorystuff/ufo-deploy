import React, { useEffect, useState } from "react";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import bannerImage from "@components/Site/site-images/banner2.png";

export const LooseWeightBanner = ({ onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        const diff = Math.floor(Math.random() * 10) + 1;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "24px 0",
        }}>
        <Typography
          variant='h2'
          sx={{
            color: "#241063",
            fontSize: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "30px",
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'>
            <path
              d='M15.7883 3.79988C14.6818 1.72527 11.7082 1.72527 10.6018 3.79988L1.68213 20.5243C0.935873 21.9236 1.45509 23.7119 3.07719 24.2042C5.07791 24.8114 8.40362 25.5 13.195 25.5C17.9864 25.5 21.3121 24.8114 23.3129 24.2042C24.935 23.7119 25.4542 21.9236 24.7079 20.5243L15.7883 3.79988Z'
              fill='#FF5C1D'
              stroke='#FF5C1D'
            />
          </svg>
          UFO
        </Typography>
      </Box>
      <Typography
        variant='h6'
        sx={{
          color: "#241063",
          fontSize: "22px",
          fontWeight: "500",
          lineHeight: "135%",
          marginBottom: "58px",
        }}>
        Lose twice as much weight with UFO vs. trying on your own
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          marginBottom: "124px",
        }}>
        <Box
          sx={{
            width: "343px",
            height: "270px",
          }}>
          <img
            src={bannerImage}
            alt='banner-image'
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
        <Typography
          variant='h6'
          sx={{
            color: "#999",
            fontSize: "14px",
            fontWeight: "450",
            lineHeight: "150%",
            marginBottom: "58px",
          }}>
          Based on a study over 12 weeks of active UFO users.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          width: "100%",
        }}>
        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "14px",
            fontWeight: "450",
            lineHeight: "150%",
          }}>
          Calculating weight loss pace
        </Typography>

        {progress === 100 ? (
          <Button variant='contained' fullWidth onClick={onClose} className='survey-next-button'>
            Next
          </Button>
        ) : (
          <Box sx={{ width: "100%", position: "relative" }}>
            <LinearProgress
              variant='determinate'
              value={progress}
              sx={{
                height: "54px",
                borderRadius: "4px",
                backgroundColor: "#F5F5F5",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FF5C1D",
                },
              }}
            />
            <Typography
              variant='h6'
              sx={{
                textAlign: "center",
                color: "#241063",
                fontSize: "18px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}>
              {progress}%
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
