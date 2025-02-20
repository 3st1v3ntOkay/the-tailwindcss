import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

import tailwindcss from "@tailwindcss/vite";

import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@component": resolve(__dirname, "./src/components"),
      "@route": resolve(__dirname, "./src/routes"),
      "@asset": resolve(__dirname, "./src/assets"),
      "@data": resolve(__dirname, "./src/data"),
    },
  },
});
