// import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import less from 'rollup-plugin-less'; // less 文件，没有样式可删除

export default {
  entry: 'src/index.js', // String，入口文件路径
  dest: 'dist/index.js', // String，输出的打包文件
  format: 'es', // String，输出类型 (amd, cjs, es, iife, umd)
  external: ['react', 'prop-types'], // Array，不需要打包的文件
  sourceMap: true, // Boolean，是否要支持 sourcemap
  plugins: [
    resolve(),
    eslint({
      include: ['src/**/*.js'] // 需要检查的部分
    }),
    babel({
      exclude: ['node_modules/**', 'src/**/*.less']
    }),
    uglify(),
    less({
      include: ['src/**/*.less'],
      output: 'dist/index.css',
    }),
  ]
};
