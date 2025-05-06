import React from "react";
import { Box, Button, Typography } from "@mui/material";
import bannerImage from "@components/Site/site-images/banner3.png";

export const LongTermResultsBanner = ({ onClose }) => {
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
          marginBottom: "32px",
          textAlign: "left",
        }}>
        UFO creates long-term results through habit and behavior change, not restrictive dieting
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
            textAlign: "left",
          }}>
          Scientific Reports - 78% of participants using UFO lost weight over a 6 month study.
        </Typography>
      </Box>

      <Button variant='contained' fullWidth onClick={onClose} className='survey-next-button'>
        Got it!
      </Button>
    </Box>
  );
};
