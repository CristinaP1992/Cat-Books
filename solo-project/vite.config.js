import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Cat&Books',
        short_name: 'Cat&Books',
        description: 'Plan your reading',
        theme_color: 'antiquewhite',
        // display: 'standalone',
        // orientation: 'portrait',
        // start_url: '.',
        icons: [
          {
            src: 'icon192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
