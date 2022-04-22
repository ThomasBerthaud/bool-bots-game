import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom", "redux", "@reduxjs/toolkit"],
                    pixi: ["pixi.js"],
                },
            },
            plugins: [analyze({ summaryOnly: true })],
        },
    },
    plugins: [react()],
});
