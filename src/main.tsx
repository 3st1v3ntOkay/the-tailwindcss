import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Theme } from "@radix-ui/themes";

import { Root } from "./routes/root";

import "@radix-ui/themes/styles.css";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Theme>
      <Root />
    </Theme>
  </StrictMode>,
);
