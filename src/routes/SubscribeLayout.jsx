import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailInput } from "@/components/Paddle/EmailInput";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SubscribeBanner } from "@/components/Paddle/SubscribeBanner";
import { useUserStore } from "@/store/store"; // Assuming this is your Zustand store

const SubscribeLayout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationParent] = useAutoAnimate();

  // Accessing measurementSystem from the store
  const measurementSystem = useUserStore((state) => state.measurementSystem);

  // useNavigate hook for redirection
  const navigate = useNavigate();

  // Effect to check measurementSystem and redirect if necessary
  useEffect(() => {
    if (!measurementSystem) {
      navigate("/get-started"); // Redirect if measurementSystem is empty
    }
  }, [measurementSystem, navigate]); // Runs whenever measurementSystem or navigate changes

  const steps = useMemo(
    () => [
      { component: <EmailInput />, key: "step-email-input" },
      { component: <SubscribeBanner />, key: "step-subscribe-banner" },
    ],
    [],
  );

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    const step = steps[currentStep];
    return React.cloneElement(step.component, {
      key: step.key,
      onNext: handleNext,
      onBack: currentStep > 0 ? handleBack : undefined,
    });
  };

  return (
    <div ref={animationParent} className='container'>
      {renderCurrentStep()}
    </div>
  );
};

export default SubscribeLayout;
