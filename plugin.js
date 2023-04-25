// plugin.js
module.exports = function ({ types: babelTypes }) {
  return {
    // name: "babel-plugin-example",
    visitor: {
      BinaryExpression(path){
        if (path.node.operator !== "-") {
          return;
        }
        path.node.left =  babelTypes.identifier(88)
        path.node.right = babelTypes.identifier(99)
        // path.node.operator = babelTypes.binaryExpression('+')
      }
    }
  };
};
