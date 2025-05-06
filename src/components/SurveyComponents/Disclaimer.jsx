import { Typography, Button, Box } from "@mui/material";

export const Disclaimer = ({ onNext }) => {
  const handleClick = () => {
    onNext();
  };

  return (
    <div className='content'>
      <div>
        <Typography variant='h6' align='left' sx={{ color: "primary.main", mb: 2, fontWeight: 450 }}>
          Disclaimer
        </Typography>

        <Typography
          align='left'
          sx={{ color: "primary.main", mb: 3, fontSize: "16px", fontWeight: 450, lineHeight: "24px" }}>
          Stay safe! Improving your health and wellbeing is important. However, it's crucial to do so safely.
        </Typography>

        <Typography
          align='left'
          sx={{ color: "primary.main", mb: 3, fontSize: "16px", fontWeight: 450, lineHeight: "24px" }}>
          Before making any changes to your diet, consult your doctor to see if it is appropriate for you, especially if
          you have any medical condition and/or are taking any medication.
        </Typography>

        <Box sx={{ mt: 5, p: 2, backgroundColor: "#F5F5F5", borderRadius: "12px", border: "0.4px solid #DFDFDF" }}>
          <Typography
            align='justify'
            sx={{ color: "primary.main", fontSize: "16px", fontWeight: 450, lineHeight: "24px" }}>
            <strong>Please note:</strong> If you're underweight, under 18 years old, pregnant or breastfeeding, or have
            a diagnosed eating disorder, we don't recommend that you pursue these changes. This information is not a
            substitute for medical advice or treatment from your doctor or healthcare professional.
          </Typography>
        </Box>
      </div>

      <div>
        <Button variant='contained' fullWidth onClick={handleClick} className='survey-next-button'>
          Accept
        </Button>
      </div>
    </div>
  );
};
