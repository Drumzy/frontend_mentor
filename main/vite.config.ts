import { defineConfig, normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
normalizePath(path.resolve(__dirname,'./src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteStaticCopy({
    targets:[{
      src:["./src/assets/image-web-3-desktop.jpg","./src/assets/image-web-3-mobile.jpg","./src/assets/ttten.svg"],
      dest:'./assets'
    }]
  })],
})
