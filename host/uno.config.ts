import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind4,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      '/home/moltres/Music/araCreate/ARM/ui-library-03-09/trying-unocss-with-package/src/**/*.{js,ts,jsx,tsx}',
    ],
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
    presetWind4(),
  ],
});
