/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      runtimeOnly: true,
      globalSFCScope: true,
      defaultSFCLang: 'json',
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],

  optimizeDeps: {
    include: ['vue'],
  },

  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    setupFiles: ['test/setup-tests.ts'],
    environment: 'happy-dom',
    clearMocks: true,
    coverage: {
      clean: true,
      cleanOnRerun: true,
      reporter: ['cobertura', 'text', 'html'],
      include: ['src/**/*.{vue,ts}'],
    },
    deps: {
      inline: ['@vue'],
    },
  },
});
