import React from "react";
import {
  ExperiencePromoBanner,
  LongTermResultsBanner,
  LooseWeightBanner,
  PreferencesBanner,
  StickingToAPlanBanner,
} from ".";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Banners = ({ activeStep, onBannerClose, onBannerOpen }) => {
  const [isBanner, setIsBanner] = React.useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = React.useState(0);
  const [currentBannerActive, setCurrentBannerActive] = React.useState(-1);
  const [bannerAnimationParent] = useAutoAnimate();
  React.useEffect(() => {
    if (activeStep > currentBannerIndex) {
      setIsBanner(true);
      onBannerOpen(true);
      setCurrentBannerIndex(activeStep);
      setCurrentBannerActive((prev) => prev + 1);
    }
  }, [activeStep, currentBannerIndex]);

  const handleBannerNext = () => {
    setCurrentBannerActive((prev) => prev + 1);
  };

  const handleBannerClose = () => {
    setIsBanner(false);
    onBannerOpen(false);
    onBannerClose();
  };

  const stepBanners = [
    { component: <LongTermResultsBanner onClose={handleBannerClose} />, key: "banner-long-term" },
    { component: <StickingToAPlanBanner onNext={handleBannerNext} />, key: "banner-sticking" },
    { component: <LooseWeightBanner onClose={handleBannerClose} />, key: "banner-loose" },
    { component: <ExperiencePromoBanner onClose={handleBannerClose} />, key: "banner-experience" },
    { component: <PreferencesBanner onClose={handleBannerClose} />, key: "banner-preferences" },
  ];

  if (!isBanner) return null;

  return (
    <div ref={bannerAnimationParent} className='banner' style={{ height: "100vh - 20px" }}>
      {React.cloneElement(stepBanners[currentBannerActive].component, {
        onNext: handleBannerNext,
        onClose: handleBannerClose,
      })}
    </div>
  );
};
