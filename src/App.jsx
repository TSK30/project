import React, { useState } from "react";
import { CampaignSetup } from "./screens/CampaignSetup/CampaignSetup";
import { CallLogs } from "./screens/CallLogs/CallLogs";

export const App = () => {
  const [activeScreen, setActiveScreen] = useState("campaigns");

  const renderScreen = () => {
    switch (activeScreen) {
      case "call-logs":
        return <CallLogs onNavigate={setActiveScreen} />;
      case "campaigns":
      default:
        return <CampaignSetup onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div>
      {renderScreen()}
    </div>
  );
}; 