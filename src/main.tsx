import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Root } from "./routes/root";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
