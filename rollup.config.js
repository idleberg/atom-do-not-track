import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  commonjs(),
  json(),
  nodeResolve({
    preferBuiltins: true
  }),
  (
    production
      ? terser()
      : undefined
  ),
  svelte({
    compilerOptions: {
      dev: !production
    },
    emitCss: false,
    preprocess: autoPreprocess()
  }),
  typescript({
    allowSyntheticDefaultImports: true,
  }),
  production && terser()
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/do-not-track.js',
      exports: 'default',
      format: 'cjs',
      sourcemap: true
    },
    external: [
      // Atom
      'atom',
      'electron'
    ],
    plugins: plugins
  }
];
