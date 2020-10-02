import rimraf from 'rimraf'
import typescript from 'rollup-plugin-typescript2'
// import commonjs from '@rollup/plugin-commonjs'
// import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

export default [{
  input: 'src/index.ts',

  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],

  plugins: [
    typescript()
  ]
}, {
  input: 'src/iife.ts',

  output: {
    file: pkg.browser,
    format: 'iife',
    name: 'aspecter',
    plugins: [
      // terser()
    ]
  },

  plugins: [
    typescript(),
    (function additionalWork () {
      return {
        name: 'additional-work',
        buildEnd () {
          rimraf('./dist/iife.d.ts', () => {})
        }
      }
    })()
  ]
}]
