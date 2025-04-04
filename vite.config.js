// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  base: "/", // Set the base path for the root of the domain
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy-policy.html"),
        terms: resolve(__dirname, "terms-of-service.html"),
      },
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
    ],
  },
});
