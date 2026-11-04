import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

export default defineConfig({
  root: here,
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^pulsoicon$/, replacement: path.join(root, "src", "index.ts") },
      { find: /^pulsoicon\/(.*)$/, replacement: path.join(root, "src", "$1") },
    ],
  },
  server: { port: 10205, strictPort: true, host: true },
});
