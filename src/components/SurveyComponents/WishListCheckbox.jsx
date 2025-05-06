import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const WishListCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    "Guidance and support",
    "Increase self-awareness",
    "Get more knowledge",
    "Build healthy habits",
    "Stay motivated",
  ];

  return (
    <CheckboxList
      title='What would you like to obtain?'
      options={options}
      onNext={onNext}
      updateUserDataKey='wishlist'
      updateUserData={updateUserData}
    />
  );
};
