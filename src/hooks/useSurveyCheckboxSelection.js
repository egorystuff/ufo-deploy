import { useState } from "react";

export const useSurveyCheckboxSelection = (initialOptions = []) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
  };

  return {
    selectedOptions,
    handleCheckboxChange,
    setSelectedOptions,
  };
};
