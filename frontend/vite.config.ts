import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import ViteWebfontDownload from 'vite-plugin-webfont-dl'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteWebfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Archivo:wght@800&display=swap',
      ],
      {
        injectAsStyleTag: false,
      }
    ),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules': true,
            'custom-properties': true,
          },
        }),
      ],
    },
  },
})
