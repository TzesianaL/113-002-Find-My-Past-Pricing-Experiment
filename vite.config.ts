import { defineConfig } from 'vite'
import reactSwc from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  base: './',
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  resolve: {
    alias: {
      crypto: 'empty-module',
      // Add path mapping for absolute imports from src
      // Note: Don't map 'redux' as it conflicts with the npm package
      ...Object.fromEntries(
        [
          'Components',
          'hooks',
          'assets',
          'functions',
          'images',
          'routing',
          'shared',
          'types',
          'AppComponents',
          'output',
          'StandardLayouts',
          'stories',
        ].map((dir) => [dir, path.resolve(__dirname, `src/${dir}`)])
      ),
      // Manually add redux paths to avoid conflicts
      'redux/store': path.resolve(__dirname, 'src/redux/store'),
      'redux/reducers': path.resolve(__dirname, 'src/redux/reducers'),
      'redux/globalActions/globalActions': path.resolve(
        __dirname,
        'src/redux/globalActions/globalActions'
      ),
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [reactSwc(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        standaloneBasket: 'index-standalone-basket.html',
        standaloneProductRange: 'index-standalone-product-range.html',
      },
      output: {
        assetFileNames: 'images/static/assets/[name][extname]',
        chunkFileNames: 'images/static/chunks/[name].js',
        entryFileNames: 'images/static/js/[name].js',
      },
    },
  },
})
