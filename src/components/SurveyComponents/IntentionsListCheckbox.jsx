import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const IntentionsListCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = ["Improve physical appearance", "Become healthier", "Sleep better", "Feel happier", "Other"];

  return (
    <CheckboxList
      title='What are your intentions?'
      options={options}
      onNext={onNext}
      updateUserDataKey='listOfIntentions'
      updateUserData={updateUserData}
    />
  );
};
