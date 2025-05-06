import { useRef, useState, useEffect } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import { usePaddle } from "@/hooks/usePaddle";
import { usePaddleProducts } from "@/hooks/usePaddleProducts";
import {
  CountdownTimer,
  CustomerReviews,
  MoneyBack,
  ResearchNote,
  Schedule,
  SubscriptionInfo,
  SubscriptionPlanCard,
  UfoLogo,
  UserStats,
} from "./index";

export const SubscribeBanner = () => {
  // Hooks and state management
  const { openInlineCheckout, error } = usePaddle(); // Paddle checkout hook
  const { products: PLANS, loading: productsLoading, error: productsError } = usePaddleProducts(); // Products data
  const [selectedPlan, setSelectedPlan] = useState(null); // Currently selected plan
  const [isPaddleInitialized, setIsPaddleInitialized] = useState(false); // Paddle initialization status
  const [isTimerActive, setIsTimerActive] = useState(true); // Special offer timer status
  const [isPaddleReady, setIsPaddleReady] = useState(false); // Paddle SDK readiness
  const checkoutContainerRef = useRef(null); // Ref for scrolling to checkout

  /**
   * Calculates the daily price for a subscription plan
   * @param {Object} plan - The subscription plan object
   * @returns {string} Formatted daily price string (e.g., "$0.99")
   */
  const calculatePricePerDay = (plan) => {
    // Use discounted price if timer is active, otherwise use regular price
    const priceToUse = isTimerActive ? plan.discountedPrice : plan.originalPrice;
    const pricePerDay = priceToUse / plan.introPeriod;
    return `$${pricePerDay.toFixed(2)}`;
  };

  // Check for Paddle SDK availability
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Paddle) {
        setIsPaddleReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Initialize default plan when products load and Paddle is ready
  useEffect(() => {
    if (PLANS.length > 0 && isPaddleReady) {
      const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
      if (defaultPlan) {
        openInlineCheckout(defaultPlan.id_sale);
        setSelectedPlan(defaultPlan.title);
        setIsPaddleInitialized(true);
      }
    }
  }, [PLANS, isPaddleReady]);

  /**
   * Handles timer completion - switches to regular pricing
   */
  const handleTimerEnd = () => {
    setIsTimerActive(false);
    const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
    if (defaultPlan) {
      setSelectedPlan(defaultPlan.title);
      openInlineCheckout(defaultPlan.id); // Use regular price ID after timer ends
    }
  };

  /**
   * Calculates the end date for the subscription period
   * @param {Object} plan - The subscription plan object
   * @returns {string} Formatted end date string
   */
  const calculateEndDate = (plan) => {
    const now = new Date();

    // Add appropriate time based on plan duration
    if (plan.title.includes("WEEK")) {
      now.setDate(now.getDate() + plan.introPeriod);
    } else if (plan.title.includes("MONTH")) {
      now.setMonth(now.getMonth() + plan.introPeriod / 30); // Approximate month as 30 days
    } else {
      now.setMonth(now.getMonth() + 1); // Default fallback
    }

    return now.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  /**
   * Handles plan selection
   * @param {string} priceId - The price ID object (contains both regular and sale IDs)
   * @param {string} planTitle - The title of the selected plan
   */
  const handlePlanSelect = (priceId, planTitle) => {
    setSelectedPlan(planTitle);
    // Use sale price ID if timer is active, otherwise use regular price ID
    openInlineCheckout(isTimerActive ? priceId.id_sale : priceId.id);
  };

  /**
   * Scrolls to the checkout section smoothly
   */
  const scrollToCheckout = () => {
    checkoutContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Error state handling
  if (error || productsError) {
    return (
      <Box textAlign='center' color='error.main' py={2}>
        <Typography>{error || productsError}</Typography>
      </Box>
    );
  }

  // Loading state handling
  if (productsLoading) {
    return (
      <Box textAlign='center' py={4}>
        <Typography>Loading subscription plans...</Typography>
      </Box>
    );
  }

  // Fallback to 1-MONTH plan if no selection exists
  const currentPlan = PLANS.find((plan) => plan.title === selectedPlan) || PLANS[1];

  return (
    <Box>
      {/* Header Section */}
      <UfoLogo />
      <Schedule />

      <Typography
        variant='h5'
        align='center'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "28px", fontWeight: 700, p: 3, pb: 0 }}>
        Grab your Personal Plan before it&apos;s gone!
      </Typography>

      {/* Special Offer Timer */}
      {isTimerActive && <CountdownTimer initialMinutes={10} initialSeconds={0} onTimerEnd={handleTimerEnd} />}

      {/* Plan Selection Cards */}
      <Box display='flex' flexDirection='column' gap={2} mt={4}>
        {PLANS.map((plan) => (
          <SubscriptionPlanCard
            key={plan.id}
            title={plan.title}
            originalPrice={`$${plan.originalPrice.toFixed(2)}`}
            discountedPrice={isTimerActive ? `$${plan.discountedPrice.toFixed(2)}` : null}
            pricePerDay={calculatePricePerDay(plan)}
            isSelected={plan.title === selectedPlan}
            onClick={() => handlePlanSelect(plan, plan.title)}
          />
        ))}
      </Box>

      {/* Informational Sections */}
      <ResearchNote />

      {/* CTA Button */}
      <Button
        variant='contained'
        fullWidth
        className='email-button'
        onClick={scrollToCheckout}
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#FF5C1D",
          "&:hover": { backgroundColor: "#FF4500" },
          "&:disabled": { backgroundColor: "#FF8D63", color: "white" },
        }}>
        Get my plan
      </Button>

      {/* Additional Marketing Sections */}
      <UserStats />
      <CustomerReviews />

      {/* CTA Button */}
      <Button
        variant='contained'
        fullWidth
        className='email-button'
        onClick={scrollToCheckout}
        sx={{
          backgroundColor: "#FF5C1D",
          "&:hover": { backgroundColor: "#FF4500" },
          "&:disabled": { backgroundColor: "#FF8D63", color: "white" },
        }}>
        Get my plan
      </Button>

      <MoneyBack />

      {/* Subscription Summary */}
      <SubscriptionInfo
        introPrice={isTimerActive ? currentPlan.discountedPrice : currentPlan.originalPrice}
        originalPrice={currentPlan.originalPrice}
        endDate={calculateEndDate(currentPlan)}
        introPeriod={currentPlan.periodLabel}
      />

      {/* Checkout Section */}
      <Typography
        variant='h5'
        align='left'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "26px", fontWeight: 700 }}>
        Payment method
      </Typography>

      <Divider sx={{ borderWidth: "1px", borderColor: "#241063", width: "100%", mx: "auto", opacity: "0.6" }} />

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", mt: 2 }}>
        UFO will use your payment details for seamless future payments.
      </Typography>

      {/* Paddle Checkout Container */}
      <Box
        className='checkout-container'
        sx={{ mt: 3, p: 2, borderRadius: "8px", border: "0.4px solid #DFDFDF" }}
        ref={checkoutContainerRef}>
        {!isPaddleInitialized && <Typography color='text.secondary'>Loading payment options...</Typography>}
      </Box>

      {/* Footer Information */}
      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", mt: 2 }}>
        You will need an iPhone smartphone to use UFO.
      </Typography>

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 700, fontSize: "16px", mt: 2 }}>
        Secure checkout
      </Typography>
      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", lineHeight: 1.2 }}>
        All information is encrypted and transmitted using Secure Sockets Layer protocol.
      </Typography>
    </Box>
  );
};
