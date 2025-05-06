import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";
import { useUserStore } from "@/store/store";

export const DietingHistoryChecklist = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);
  const options = ["Keto", "Calorie-deficit diets", "Intermittent fasting", "Low carb diet", "No, never"];

  return (
    <CheckboxList
      title='Have you ever tried restrictive weight loss methods?'
      buttonText='No, never'
      options={options}
      onNext={onNext}
      updateUserDataKey='dietingHistory'
      updateUserData={updateUserData}
    />
  );
};
