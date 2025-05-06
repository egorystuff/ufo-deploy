import { Typography, Box, Card, CardContent } from "@mui/material";

export const SubscriptionPlanCard = ({ title, originalPrice, discountedPrice, pricePerDay, isSelected, onClick }) => {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      sx={{
        height: "76px",
        backgroundColor: isSelected ? "#FFC9B5" : "#F5F5F5",
        border: isSelected ? "1px solid #FFC9B5" : "1px solid #E0E0E0",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#FFC9B5",
          borderColor: "#FFC9B5",
        },
      }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          p: "16px !important",
        }}>
        <Box>
          <Typography variant='h6' color='primary.main' align='left' fontSize={18}>
            {title}
          </Typography>

          {discountedPrice ? (
            <Box display='flex' alignItems='baseline' gap={1}>
              <Typography variant='h6' sx={{ textDecoration: "line-through", color: "#7F6FA4CC" }} fontSize={16}>
                {originalPrice}
              </Typography>
              <Typography variant='h6' fontSize={16} color='primary.main'>
                {discountedPrice}
              </Typography>
            </Box>
          ) : (
            <Typography
              variant='h6'
              fontSize={16}
              color='primary.main'
              alignItems={"left"}
              display={"flex"}
              sx={{
                fontSize: "16px",
                fontWeight: 600,
              }}>
              {originalPrice}
            </Typography>
          )}
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant='h6'
            fontWeight={700}
            color='primary.main'
            fontSize={28}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "relative",
            }}>
            <span style={{ fontSize: "18px", position: "relative", top: "-6px", right: "3px" }}>$</span> {pricePerDay}
          </Typography>

          <Typography
            variant='caption'
            color='primary.main'
            fontSize={16}
            sx={{
              position: "relative",
              top: "-8px",
            }}>
            <span>per day</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
