import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
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
