// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'PrettierPluginTwig',
      fileName: pkg.name,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['prettier'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          prettier: 'Prettier',
        },
      },
    },
  },
});
