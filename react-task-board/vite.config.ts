import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Pure frontend dev server — no proxy, no API, no database.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
});
