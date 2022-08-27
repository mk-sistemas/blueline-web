/// <reference types="vitest" />

import { defineConfig } from "vite";
import * as path from "path";

import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup-test.js",
  },
});
