import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vibxErrorPlugin from './.vibx/error-plugin.mjs'

export default defineConfig({
  plugins: [react(), vibxErrorPlugin()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': '/home/user/src',
    },
  },
})
