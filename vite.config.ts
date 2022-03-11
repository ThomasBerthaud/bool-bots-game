import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    pixi: ["pixi.js"],
                },
            },
            plugins: [analyze({ summaryOnly: true })],
        },
    },
    plugins: [react()],
});
