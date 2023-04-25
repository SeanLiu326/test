const t = require("@babel/types");

module.exports = () => {
  return {
    visitor: {
      Identifier: (path, state) => {
        const nodeName = path.node.name;
        const isDebug = nodeName === "DEBUG";

        const parentPath = path.parentPath;
        const parentIsIf = t.isIfStatement(parentPath);

        if (isDebug && parentIsIf) {
          const stringNode = t.stringLiteral("DEBUG");
          path.replaceWith(stringNode);
        }
      },
      Literal: (path, state) => {
        const nodeVal = path.node.value;
        const isDebug = nodeVal === "DEBUG";
        const parentPath = path.parentPath;
        const parentIsIf = t.isIfStatement(parentPath);

        if (isDebug && parentIsIf) {
          const isPro = process.env.NODE_ENV;
          if(isPro) {
            path.parentPath.remove();
          }
        }
      },
    },
  };
};
