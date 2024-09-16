import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import BaseLayout from "layouts/BaseLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
  }
]);
