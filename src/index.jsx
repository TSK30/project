import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CampaignSetup } from "./screens/CampaignSetup";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <CampaignSetup />
  </StrictMode>,
);