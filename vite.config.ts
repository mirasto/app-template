import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import stylelint from 'vite-plugin-stylelint';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig(({ mode }): UserConfig => {
  const isProd = mode === 'production';
  const BASE_PATH = '/repository-name/';

  return {
    base: isProd ? BASE_PATH : '/',

    plugins: [
      react(),
      stylelint({
        fix: true,
        cache: false,
      }),
      ViteMinifyPlugin({}),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    },
  };
});
