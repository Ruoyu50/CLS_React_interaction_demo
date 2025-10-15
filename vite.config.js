import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/CLS_React_interaction_demo/",
    plugins: [react()],
    build: {
    outDir: "docs", // 原本是 "dist"
  },
})