import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig(() => {
  return {
    base: "./",
    resolve: {},

    plugins: [
      UnoCSS(),
      react(),
      federation({
        name: "host",
        filename: "remoteEntry.js",
        // exposes: {
        //   "./App": "./src/App.tsx",
        // },
        remotes: {
          remote: {
            type: "module",
            name: "remote",
            entry: "http://localhost:3001/remoteEntry.js",
            shareScope: "default",
            entryGlobalName: "remote",
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
      port: 3000,
      strictPort: true,
    },
    server: {
      port: 3000,
      strictPort: true,
    },
  };
});
