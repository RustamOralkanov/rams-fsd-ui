import { fileURLToPath, URL } from "node:url";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@styles": path.resolve(__dirname, "src/shared/styles"),
            "@assets": path.resolve(__dirname, "src/app/assets"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/app/assets/styles/vars.scss";
                                 @import "@/app/assets/styles/fonts.scss";`,
            },
        },
    },
});
