import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/lib/design-system.ts' },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  minify: true,
  sourcemap: true,
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
})
