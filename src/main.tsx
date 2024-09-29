import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { TooltipProvider } from "./components/ui/Tooltip/Tooltip.tsx";
import { ModalsProvider } from "./context/ModalsContext.tsx";
import TanstackProvider from "./tanstackQuery/TanstackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <ModalsProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ModalsProvider>
    </TanstackProvider>
  </StrictMode>
);
