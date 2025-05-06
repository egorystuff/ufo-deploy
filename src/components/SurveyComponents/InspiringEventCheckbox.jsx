import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const InspiringEventCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = ["Vacation", "Wedding", "Sports competition", "Summer", "Birthday"];

  return (
    <CheckboxList
      title="Do you have an event that's inspiring you to change?"
      subtitle='Having something to look forward to can help you stay on track.'
      buttonText="No, I don't have an event"
      options={options}
      onNext={onNext}
      updateUserDataKey='inspiringEvents'
      updateUserData={updateUserData}
    />
  );
};
