import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 设置别名
    },
  },
});
