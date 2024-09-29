import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { TooltipProvider } from "./components/ui/Tooltip/Tooltip.tsx";
import TanstackProvider from "./tanstackQuery/TanstackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </TanstackProvider>
  </StrictMode>
);
