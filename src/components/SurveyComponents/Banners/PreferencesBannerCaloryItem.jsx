import React from "react";
import { Box, Typography } from "@mui/material";

export const PreferencesBannerCaloryItem = ({ name, gr, percent }) => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <svg xmlns='http://www.w3.org/2000/svg' width='7' height='46' viewBox='0 0 7 46' fill='none'>
        <rect
          x='0.3'
          y='45.2'
          width='44.4'
          height='6.4'
          rx='3.2'
          transform='rotate(-90 0.3 45.2)'
          stroke='#241063'
          strokeWidth='0.4'
        />
        <rect
          x='0.3'
          y='45.2'
          width='11.4'
          height='6.4'
          rx='3.2'
          transform='rotate(-90 0.3 45.2)'
          fill='#241063'
          stroke='#241063'
          strokeWidth='0.4'
        />
      </svg>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "18px",
              fontWeight: "450",
              lineHeight: "120%",
            }}>
            {gr}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "11px",
              fontWeight: "450",
              lineHeight: "130%",
            }}>
            {percent}
          </Typography>
        </Box>
        <Typography
          variant='h6'
          sx={{
            color: "#999",
            fontSize: "11px",
            fontWeight: "450",
            lineHeight: "130%",
          }}>
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
