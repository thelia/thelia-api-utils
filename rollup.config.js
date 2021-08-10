import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'TheliaAPI',
      file: pkg.browser,
      format: 'umd',
      globals: {
        'react-dom': 'ReactDOM',
      },
    },
    external: ['react-dom'],
    plugins: [
      json(),
      nodeResolve({ preferBuiltins: true, browser: true }),
      typescript(),
      commonjs(),
      filesize(),
    ],
  },
];
