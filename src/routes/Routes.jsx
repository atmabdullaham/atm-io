import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Installation from "../pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "details",
        Component: AppDetails,
      },
      {
        path: "all-apps",
        Component: AllApps,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
