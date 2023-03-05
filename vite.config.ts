import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const IS_DEVELOPMENT = mode === "development";
  console.log("file: vite.config.ts~line: 4~mode", mode, IS_DEVELOPMENT);
  return {
    plugins: [react()],
    base: IS_DEVELOPMENT ? "/" : "/alterEGO-Test",
  };
});
