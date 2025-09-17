import { defineConfig } from 'vite'
import { resolve } from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.js'),
      name: 'sanitizeHtml',
      // the proper extensions will be added
      fileName: (format) => `sanitize-html.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library - empty array means bundle everything
      external: [],
      output: [
        {
          format: 'umd',
          name: 'sanitizeHtml',
          entryFileNames: 'sanitize-html.umd.js'
        },
        {
          format: 'es',
          entryFileNames: 'sanitize-html.es.js'
        }
      ]
    },
    // Don't minify so we can debug the issue first
    minify: true,
    // Reduce bloat from legacy polyfills for modern browsers
    target: 'es2015',
    // Generate source maps for debugging
    sourcemap: false
  },
  plugins: [
    commonjs({
      // Include all CommonJS files
      include: ['**/*.js', 'node_modules/**']
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false
    })
  ],
  define: {
    // Define global constants for the browser build
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})