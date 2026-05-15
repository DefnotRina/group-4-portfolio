import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Standard Vite SPA config — no SSR, no Cloudflare Workers, no Lovable-specific plugins.
// TanStackRouterVite auto-generates routeTree.gen.ts from src/routes/*.tsx on dev/build.
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
    host: true,
    strictPort: true,
  },
});
