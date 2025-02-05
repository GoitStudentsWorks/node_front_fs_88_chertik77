import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), ViteMinifyPlugin({})],
  server: {
    port: 3000,
  },
  base: "/node_front_fs_88_chertik77/"
})
