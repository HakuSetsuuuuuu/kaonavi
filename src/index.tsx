import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "App";
import { ConfigProvider } from "antd";
import { config } from "theme/config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={config}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
