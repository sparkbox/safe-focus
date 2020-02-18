import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'lib/js/safe-focus.js',
    output: {
      name: 'safeFocusInit',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      babel(),
    ],
  },
  {
    input: 'lib/js/safe-focus.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel(),
    ],
  },
];
