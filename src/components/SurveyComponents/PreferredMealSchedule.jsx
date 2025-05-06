import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";
import { useEffect, useState } from "react";
import MealDiets from "@/data/MealDiets.json";

export const PreferredMealSchedule = ({ onNext }) => {
  const { mealPreference, dailyCalories, selectMealPlan } = useUserStore();
  const [filteredPlans, setFilteredPlans] = useState([]);

  useEffect(() => {
    if (!mealPreference || !dailyCalories) {
      setFilteredPlans([]);
      return;
    }

    const selectedDiet = MealDiets.find((diet) => diet.type === mealPreference);
    const plans =
      selectedDiet?.plans.filter((plan) => dailyCalories >= plan.kcalMin && dailyCalories <= plan.kcalMax) || [];

    setFilteredPlans(plans);
  }, [mealPreference, dailyCalories]);

  const handleNext = (planId) => {
    selectMealPlan(planId);
    onNext();
  };

  return (
    <Box component='div'>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }} component='div'>
        What meal schedule works best for you?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle' component='div'>
        The meal schedule directly impacts your meal plan, choose the one that suits you best.
      </Typography>

      <Box sx={{ mt: 3 }}>
        {filteredPlans.map((plan) => (
          <BaseSelectButton key={plan.id} onClick={() => handleNext(plan.id)} sx={{ textAlign: "left" }}>
            <Box component='span'>
              {plan.title}
              <Box
                component='span'
                sx={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}>
                ({plan.kcalMin}-{plan.kcalMax} kcal)
              </Box>
            </Box>
          </BaseSelectButton>
        ))}
      </Box>
    </Box>
  );
};
