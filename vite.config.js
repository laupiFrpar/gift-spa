import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load env file
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    envPrefix: 'GIFT_',
    plugins: [vue()],
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
      https: true,
      port: parseInt(env.VITE_SERVER_PORT) || 3000,
      // hmr: {
      //   overlay: false,
      // },
    },
  });
};
