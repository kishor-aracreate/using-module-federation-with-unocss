import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig(() => {
  return {
    base: "./",
    resolve: {},
    envDir: "./src/environments",
    plugins: [
      UnoCSS(),
      react(),
      federation({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App.tsx",
          "./styles": "./src/index.css",
        },
        remotes: {
          core: {
            type: "module",
            name: "host",
            entry: "http://localhost:3000/remoteEntry.js",
            shareScope: "default",
            entryGlobalName: "host",
          },
        },
        shared: {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: ["chrome89", "esnext"],
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: 3001,
      strictPort: true,
    },
    server: {
      port: 3001,
      strictPort: true,
    },
  };
});
