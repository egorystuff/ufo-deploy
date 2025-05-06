import { create } from "zustand";
import MealDiets from "@/data/MealDiets.json";
import { calculateCalories } from "@/utils/calculations";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase.js";

export const useUserStore = create((set) => ({
  measurementSystem: "metric",
  age: "",
  gender: "",
  height: "",
  weight: "105",
  idealWeight: "80",
  wishlist: [],
  listOfIntentions: [],
  inspiringEvents: [],
  fastFoodTime: "",
  nonHungerTriggers: [],
  dietingHistory: [],
  weightLossSuccess: "",
  mealPreference: "",
  startDay: "",
  mealSchedule: "",
  weeklyActivities: "",
  healthConditions: [],
  dailyCalories: null,
  selectedMealPlan: null,
  email: null,

  customerData: null,

  updateUserData: (key, value) =>
    set((state) => {
      const newState = { ...state, [key]: value };

      if (["gender", "age", "height", "weight", "weeklyActivities"].includes(key)) {
        newState.dailyCalories = calculateCalories(newState);
      }

      return newState;
    }),

  selectMealPlan: (planId) =>
    set((state) => {
      const allPlans = MealDiets.flatMap((diet) => diet.plans);
      const selectedPlan = allPlans.find((plan) => plan.id === planId);

      return {
        mealSchedule: planId,
        selectedMealPlan: selectedPlan || null,
      };
    }),

  setPaymentData: (data) => set({ customerData: data }),
}));

export const useFirestoreDataStore = create((set) => ({
  createUser: async ({ email, password, name, onboardingData }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        userName: name,
        userEmail: email,
        userId: user.uid,
        createdAt: new Date(),
      });

      await setDoc(doc(db, "users", user.uid, "onboarding_user_info", user.uid), onboardingData);

      alert("Пользователь успешно создан и добавлен в Firestore!");
    } catch (error) {
      alert(error.message);
    }
  },

  sendSignInEmail: async (email) => {
    const actionCodeSettings = {
      url: "http://localhost:5173/get-started",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("Ссылка для входа отправлена на email");
    } catch (error) {
      alert(error.message);
    }
  },

  completeSignInWithEmailLink: async (emailFromQuery) => {
    try {
      if (!emailFromQuery) throw new Error("Email не передан");

      if (!isSignInWithEmailLink(auth, window.location.href)) {
        throw new Error("Некорректная ссылка входа");
      }

      const result = await signInWithEmailLink(auth, emailFromQuery, window.location.href);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          userEmail: user.email,
          userId: user.uid,
          createdAt: new Date(),
        });
      }

      alert("Вы успешно вошли в систему!");
      return user;
    } catch (error) {
      alert(error.message);
    }
  },
}));
