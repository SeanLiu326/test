// const devDebug = require("./babelPlugin/devDebug.js")
const test = import('plugin.js')
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  plugins: [ test,"transform-remove-console"]
}
