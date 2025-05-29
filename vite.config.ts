import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // ← 여기에 실제 레포지토리명을 넣으세요!
});
