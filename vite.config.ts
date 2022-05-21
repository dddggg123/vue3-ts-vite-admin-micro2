import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [vue(), qiankun('micro2', { useDevMode: true })],
    server: {
      port: 6889,
      open: true
    },
    base: env.VITE_APP_BASE
  }
})
