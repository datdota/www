// @ts-check

/**
 * @type {import("@babel/core").ConfigFunction}
 */
module.exports = {
  presets: [require("next/babel")],
  plugins: [[require("babel-plugin-styled-components"), { ssr: true }]]
};
