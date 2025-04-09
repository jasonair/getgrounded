// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  base: "/", // Set the base path for the root of the domain
  publicDir: "public", // Specify the public directory
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy-policy.html"),
        terms: resolve(__dirname, "terms-and-conditions.html"),
      },
    },
  },
  define: {
    'process.env': {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  },
});
