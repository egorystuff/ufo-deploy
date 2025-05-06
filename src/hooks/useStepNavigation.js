import { useState } from "react";

export const useStepNavigation = (stepComponents) => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  const handleNext = () => {
    setStep((prev) => prev + 1);

    const currentStep = stepComponents[activeStep];
    if (activeSubStep < currentStep.length - 1) {
      setActiveSubStep((prev) => prev + 1);
    } else {
      setCompletedSteps((prev) => ({ ...prev, [activeStep]: true }));
      if (activeStep < stepComponents.length - 1) {
        setActiveStep((prev) => prev + 1);
        setActiveSubStep(0);
      }
    }
  };

  const handleBack = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : 0));

    if (activeSubStep > 0) {
      setActiveSubStep((prev) => prev - 1);
      setCompletedSteps((prev) => ({ ...prev, [activeStep]: false }));
    } else if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setActiveSubStep(stepComponents[activeStep - 1].length - 1);
      setCompletedSteps((prev) => ({ ...prev, [activeStep - 1]: false }));
    }
  };

  return {
    step,
    activeStep,
    activeSubStep,
    completedSteps,
    handleNext,
    handleBack,
    setActiveStep,
    setActiveSubStep,
  };
};
