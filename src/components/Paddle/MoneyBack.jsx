import { Box, Typography, Link } from "@mui/material";
import React from "react";

export const MoneyBack = () => {
  return (
    <Box sx={{ mt: 2, p: 2, backgroundColor: "#F5F5F5", borderRadius: "8px", border: "0.4px solid #DFDFDF" }}>
      <Typography
        variant='h5'
        sx={{
          color: "primary.main",
          fontSize: "26px",
          fontWeight: 700,
          mb: 2,
          textAlign: "center",
        }}>
        30 Day Money-Back Guarantee
      </Typography>

      <Typography align='justify' sx={{ color: "primary.main", fontSize: "16px", fontWeight: 450, lineHeight: "24px" }}>
        We're confident with our service quality and its results. So, if you're ready to reach your goals, give us a
        try! If you're not happy with your results, just let us know within 30 days after your purchase and we'll
        provide a full refund. You will need to demonstrate that you have followed the program. Find more about the
        applicable limitations in our{" "}
        <Link
          href='/refund-policy'
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            fontWeight: 450,
            "&:hover": {
              color: "primary.dark",
            },
          }}>
          Cancellation & Refund Policy
        </Link>
        .
      </Typography>
    </Box>
  );
};
