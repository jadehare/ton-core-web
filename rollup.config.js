import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import polyfillNode from "rollup-plugin-polyfill-node";
import typescript from "rollup-plugin-typescript2";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default {
  input: "src/index.ts",
  output: {
    file: "libs/toncore.js",
    format: "cjs",
  },
  plugins: [
    resolve({
      browser: true, // 重要的配置，告诉 Rollup 在浏览器环境下解析模块
      preferBuiltins: false, // 不优先使用内置模块
    }),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    polyfillNode(),
    typescript({
      // 覆盖 tsconfig.json 的配置（可选）
      tsconfigOverride: {
        compilerOptions: {},
      },
    }),
    builtins(),
    globals(),
  ],
};
