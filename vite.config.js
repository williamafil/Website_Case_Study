import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: '//Website_Case_Study//',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 设置别名
    },
  },
});
