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
    if (!selectedDiet) {
      setFilteredPlans([]);
      return;
    }

    const plansWithTolerance = selectedDiet.plans.filter((plan) => {
      const lowerBound = plan.kcalMin * 0.9; // -10%
      const upperBound = plan.kcalMax * 1.1; // +10%
      return dailyCalories >= lowerBound && dailyCalories <= upperBound;
    });

    setFilteredPlans(plansWithTolerance);
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

      {filteredPlans.length > 0 ? (
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
      ) : (
        <Box sx={{ mt: 5, p: 2, backgroundColor: "#F5F5F5", borderRadius: "12px", border: "0.4px solid #DFDFDF" }}>
          <Typography variant='h7' align='сenter' sx={{ color: "primary.main", fontWeight: 450 }} component='div'>
            No meal schedules available for your preferences.
          </Typography>

          <Typography variant='h6' align='сenter' className='survey-subtitle' component='div'>
            Please adjust your meal preference or daily calories.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
