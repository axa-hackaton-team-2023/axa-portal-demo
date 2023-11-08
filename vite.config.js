import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'app',
    remotes: {
      // remoteApp: 'https://axa-hackaton-team-2023.github.io/eh-widget-app/assets/remoteEntry.js',
      remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
    },
    shared: ['react','react-dom']
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: '/axa-portal-demo/',
  // FOR DEV ENV
  // server: {
  //   proxy: {
  //     "^/local-proxy/propositions": {
  //       target: 'https://axa-api-platform.eh.dev.app.fioneer.com/api/v1',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/local-proxy/, ""),
  //     },
  //   },
  // },
});
