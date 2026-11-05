import { defineConfig, type Plugin } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { caseSlugs } from "./src/content/profile";

// GitHub Pages n'a pas de fallback SPA : chaque route reçoit sa copie d'index.html.
function spaRoutes(routes: string[]): Plugin {
  return {
    name: "spa-routes",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      for (const route of routes) {
        const dir = path.join(dist, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(index, path.join(dir, "index.html"));
      }
      fs.copyFileSync(index, path.join(dist, "404.html"));
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    spaRoutes(["qui-suis-je", ...caseSlugs.map((s) => `qui-suis-je/${s}`)]),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
