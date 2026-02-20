/**
 * CLARA AI Receptionist - Kiosk Navigation Routes
 * 
 * Flow:
 * 1. Greeting (/) - Auto-advances to language selection after 3s
 * 2. Language Selection (/language) - Mandatory language gate
 * 3. Main Dashboard (/dashboard) - Category selection & voice input
 * 4. Active Listening (/listening) - Voice transcription overlay
 * 5. Result Card (/result) - Display answers with tables/info
 */

import { createBrowserRouter } from "react-router";
import { Greeting } from "./screens/Greeting";
import { LanguageSelection } from "./screens/LanguageSelection";
import { MainDashboard } from "./screens/MainDashboard";
import { ActiveListening } from "./screens/ActiveListening";
import { ResultCard } from "./screens/ResultCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Greeting,
  },
  {
    path: "/language",
    Component: LanguageSelection,
  },
  {
    path: "/dashboard",
    Component: MainDashboard,
  },
  {
    path: "/listening",
    Component: ActiveListening,
  },
  {
    path: "/result",
    Component: ResultCard,
  },
]);