import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4001",
      },
    },

    allowedHosts: [
      "mesfor-repair.repairapp.com",
      "mesweb-repair.repairapp.com",
    ],
  },

  plugins: [vue()],
});
