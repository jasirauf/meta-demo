import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TemplateProvider } from "./context/TemplateContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TemplateProvider>
    <App />
  </TemplateProvider>
);
