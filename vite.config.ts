import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
