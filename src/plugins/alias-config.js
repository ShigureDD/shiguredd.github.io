const path = require("path");

module.exports = function aliasPlugin(context, options) {
  return {
    name: "docusaurus-plugin-aliases",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../../src"),
          },
        },
      };
    },
  };
};
