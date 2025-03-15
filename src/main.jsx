import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.css";
import "./styles/BasicInfoForm.css";
import "./styles/Card.css";
import "./styles/Display.css";
import "./styles/Form.css";
import "./styles/FormInput.css";
import "./styles/ResumePage.css";
import "./styles/ResumeSection.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
