module.exports = function tailwindPlugin(context, options) {
  return {
    name: "tailwindcss-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [require("@tailwindcss/postcss")];
      return postcssOptions;
    },
  };
};
