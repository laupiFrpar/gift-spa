import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'GIFT_',
  plugins: [vue({
    reactivityTransform: true,
  })],
  resolve: {
    alias: [
      {
        // this is required for the SCSS module
        find: /^~(.*)/,
        replacement: '$1',
      },
      {
        // this is required for resolve paths to JS files
        find: '@',
        replacement: resolve(projectRootDir, 'src'),
      },
    ],
  },
  server: {
    port: 3003,
    // hmr: {
    //   overlay: false,
    // },
  },
});
