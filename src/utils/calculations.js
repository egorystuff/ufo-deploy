export const calculateCalories = (state) => {
  if (!state.gender || !state.age || !state.height || !state.weight || !state.weeklyActivities) {
    return null;
  }

  const weight = parseFloat(state.weight.toString());
  const idealWeight = parseFloat(state.idealWeight?.toString() || state.weight.toString());
  const height = parseFloat(state.height.toString());
  const age = parseInt(state.age.toString());

  // Mifflin-St. Geor Formula
  let bmr;
  if (state.gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Activity coefficients
  const activityFactors = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extremely_active: 1.9,
  };

  // Goal factor
  const weightDifference = weight - idealWeight;
  let goalFactor = 1;

  if (weightDifference > 5) goalFactor = 0.85;
  else if (weightDifference < -5) goalFactor = 1.15;

  const activityFactor = activityFactors[state.weeklyActivities] || 1.2;
  return Math.round((bmr * activityFactor * goalFactor) / 50) * 50;
};
