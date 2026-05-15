import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Standard Vite SPA config — no SSR, no Cloudflare Workers, no Lovable-specific plugins.
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react" }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: true,
    strictPort: true,
  },
});
