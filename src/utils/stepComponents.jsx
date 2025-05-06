import React from "react";
import {
  MeasurementSystem,
  AgeInput,
  GenderSelection,
  HeightInput,
  WeightInput,
  IdealWeight,
  WishListCheckbox,
  IntentionsListCheckbox,
  InspiringEventCheckbox,
  FastFoodConsumptionFrequency,
  NonHungerTriggersChecklist,
  DietingHistoryChecklist,
  WeightLossSuccessSelector,
  MealPreferencesSelector,
  WeekStartDaySelector,
  PreferredMealSchedule,
  WeeklyActivities,
  HealtConditionsCheckbox,
  Disclaimer,
} from "@/components";

const stepComponents = [
  // Demographic profile
  [
    { component: <MeasurementSystem />, key: "measurement" },
    { component: <AgeInput />, key: "age" },
    { component: <GenderSelection />, key: "gender" },
    { component: <HeightInput />, key: "height" },
    { component: <WeightInput />, key: "weight" },
  ],

  // Goal setting
  [
    { component: <IdealWeight />, key: "ideal-weight" },
    { component: <WishListCheckbox />, key: "wishlist" },
    { component: <IntentionsListCheckbox />, key: "intentions" },
    { component: <InspiringEventCheckbox />, key: "inspiring-events" },
  ],

  // Experience
  [
    { component: <FastFoodConsumptionFrequency />, key: " fast-food" },
    { component: <NonHungerTriggersChecklist />, key: "non-hunger-triggers" },
    { component: <DietingHistoryChecklist />, key: "dieting-history" },
    { component: <WeightLossSuccessSelector />, key: "weight-loss" },
  ],

  // Preferences
  [
    { component: <MealPreferencesSelector />, key: "meal-preferences" },
    { component: <WeekStartDaySelector />, key: "start-day" },
    { component: <WeeklyActivities />, key: "activities" },
    { component: <PreferredMealSchedule />, key: "meal-schedule" },
  ],

  // Health info
  [
    { component: <HealtConditionsCheckbox />, key: "health-conditions" },
    { component: <Disclaimer />, key: "disclaimer" },
  ],
];

export const getStepComponents = (handleNext) =>
  stepComponents.map((group) =>
    group.map(({ component, key }) => ({
      component: React.cloneElement(component, { onNext: handleNext }),
      key,
    })),
  );
