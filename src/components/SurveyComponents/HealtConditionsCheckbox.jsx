import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const HealtConditionsCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    "Heart disease or stroke",
    "Mental health disorder",
    "High blood pressure",
    "High cholesterol",
    "Diabetes",
    "Food allergy or Intolerance",
    "No risks diagnosed",
  ];

  return (
    <CheckboxList
      title='Have you been diagnosed with any of the following health conditions?'
      subtitle='We ask for this information to guarantee a safe and seamless experience.'
      buttonText='No risks diagnosed'
      options={options}
      onNext={onNext}
      updateUserDataKey='healtConditions'
      updateUserData={updateUserData}
    />
  );
};
