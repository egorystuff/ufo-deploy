import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { useUserStore } from "./store/store.js";
import { useEffect } from "react";
import MainLayout from "./routes/MainLayout.jsx";
import GetStartedLayout from "./routes/GetStartedLayout.jsx";
import theme from "./theme/theme";
import SubscribeLayout from "./routes/SubscribeLayout.jsx";
import "./index.css";
import "./styles/main.scss";

// loggerer for store state changes
const StoreLogger = () => {
  const state = useUserStore((state) => state);

  useEffect(() => {
    // console.log("Store state updated:", state);
    // console.log("Customer data:", state.customerData);
  }, [state]);

  return null;
};

const App = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
    },
    {
      path: "/get-started",
      element: <GetStartedLayout />,
    },
    {
      path: "/subscribe",
      element: <SubscribeLayout />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <StoreLogger />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
