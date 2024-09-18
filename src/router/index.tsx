import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import BaseLayout from "layouts/BaseLayout";
import HomePage from "pages/HomePage";
import ProfileBook from "pages/ProfileBook";
import SheetGarage from "pages/SheetGarage";
import Workflow from "pages/Workflow";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profilebook",
        element: <ProfileBook />,
      },
      {
        path: "sheetgarage",
        element: <SheetGarage />,
      },
      {
        path: "workflow",
        element: <Workflow />,
      },
    ],
  },
]);
