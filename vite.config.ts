import { fileURLToPath, URL } from "node:url";
import Unocss from "unocss/vite";
import presetUno from '@unocss/preset-uno'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnocssIcons from "unocss/preset-icons";
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify({ /* options */ }),
        presetUno(),
        UnocssIcons({
          prefix: "i-",
          extraProperties: {
          display: "inline-block",
          
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
