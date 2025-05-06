import { Box, Typography, Link } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const SubscriptionInfo = ({ introPrice, originalPrice, endDate, introPeriod }) => {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        color: "primary.main",
        textAlign: "left",
      }}>
      <Box sx={{ mb: 2 }}>
        {[
          `You will only be charged $${introPrice} today for your first ${introPeriod.toLowerCase()} (details below)`,
          `Your introductory period will last until ${endDate}.`,
          `You may cancel at any time before ${endDate}, and you will not be charged.`,
          `If you don't cancel, we will automatically continue your membership at the end of your introductory period and charge the regular price of $${originalPrice}.`,
          `No partial refunds. You can cancel your subscription anytime on your Subscription Management page.`,
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 1.5,
            }}>
            <CheckIcon
              sx={{
                color: "primary.main",
                fontSize: "20px",
                mr: 1.5,
                mt: "2px",
              }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "24px",
                flex: 1,
              }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <CheckIcon
          sx={{
            color: "primary.main",
            fontSize: "20px",
            mr: 1.5,
            mt: "2px",
          }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            flex: 1,
          }}>
          Your subscription will be bound by our{" "}
          <Link
            href='/terms'
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              "&:hover": {
                color: "primary.dark",
              },
            }}>
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href='/privacy-policy'
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              "&:hover": {
                color: "primary.dark",
              },
            }}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};
