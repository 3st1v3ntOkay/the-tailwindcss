import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Root } from "@route/root";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <div className="p-4">
      <Root />
    </div>
  </StrictMode>,
);
