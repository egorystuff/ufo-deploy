import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/ufo-deploy",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: [".ngrok-free.app"],
  },
});
