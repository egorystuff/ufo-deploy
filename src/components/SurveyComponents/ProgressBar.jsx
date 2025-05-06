import React, { useMemo } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProgressBar = ({ stepComponents, activeStep, activeSubStep, completedSteps }) => {
  const { ProgressContainer, SectionLine, Square } = useMemo(() => {
    const ProgressContainer = styled(Box)({
      display: "flex",
      alignItems: "center",
      width: "calc(100% + 40px)",
      marginLeft: "-20px",
      padding: 0,
      boxSizing: "border-box",
    });

    const SectionLine = styled(Box)(({ theme, ownerState }) => {
      const { progress, isCompleted } = ownerState;

      return {
        width: `calc((100% - ${(stepComponents.length - 1) * 12}px) / ${stepComponents.length} + 10px / ${
          stepComponents.length
        })`,
        height: 10,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        position: "relative",
        overflow: "hidden",

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: isCompleted ? "100%" : `${progress}%`,
          height: "100%",
          backgroundColor: theme.palette.primary.main,
          transition: "width 0.3s ease-in-out",
        },
      };
    });

    const Square = styled(Box)(({ theme }) => ({
      width: 10,
      height: 10,
      backgroundColor: theme.palette.primary.main,
    }));

    return { ProgressContainer, SectionLine, Square };
  }, [stepComponents.length]);

  const getStepProgress = (stepIndex) => {
    if (stepIndex < activeStep) return 100;
    if (stepIndex === activeStep) {
      return ((activeSubStep + 1) / stepComponents[stepIndex].length) * 100;
    }
    return 0;
  };

  return (
    <Box sx={{ width: "100%", padding: 0, boxSizing: "border-box" }}>
      <ProgressContainer>
        {stepComponents.map((step, index) => (
          <React.Fragment key={index}>
            <SectionLine
              ownerState={{
                progress: getStepProgress(index),
                isCompleted: completedSteps[index],
              }}
            />
            {index < stepComponents.length - 1 && <Square />}
          </React.Fragment>
        ))}
      </ProgressContainer>
    </Box>
  );
};
