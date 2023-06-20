import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://hector26rubio2.github.io/santi-pagina/",
  plugins: [react()]
});
