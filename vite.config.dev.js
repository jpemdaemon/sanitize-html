import { defineConfig } from 'vite'
import { resolve } from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/browser.js'),
      name: 'sanitizeHtml',
      fileName: (format) => `sanitize-html.dev.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: [
        {
          format: 'umd',
          name: 'sanitizeHtml',
          entryFileNames: 'sanitize-html.dev.umd.js',
          exports: 'default'
        },
        {
          format: 'es',
          entryFileNames: 'sanitize-html.dev.es.js'
        }
      ],
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        commonjs()
      ]
    },
    minify: false,
    target: 'es2015',
    sourcemap: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development')
  }
})