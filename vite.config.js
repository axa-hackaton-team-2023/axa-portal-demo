import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'app',
    remotes: {
      remoteApp: 'https://axa-hackaton-team-2023.github.io/eh-widget-app/assets/remoteEntry.js',
    },
    shared: ['react','react-dom']
  })],
  base: '/axa-portal-demo/'
});
