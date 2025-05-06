import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // Определяем базовый путь в зависимости от режима
  const base = mode === "development" ? "/" : "/ufo-deploy/";

  return {
    plugins: [react()],
    base, // Динамический base в зависимости от режима
    resolve: {
      alias: {
        "@components": resolve(__dirname, "src/components"),
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      allowedHosts: [".ngrok-free.app"],
      // Для корректной работы HMR в development
      host: true,
      port: 5173,
      strictPort: true,
    },
    // Оптимизации для production build
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: mode === "development",
      minify: mode === "production" ? "esbuild" : false,
      chunkSizeWarningLimit: 1600,
    },
    preview: {
      port: 5173,
      strictPort: true,
    },
  };
});
