const withTM = require("next-transpile-modules")([
  "@tkodev/types",
  "@tkodev/utils"
]);

module.exports = withTM({
  reactStrictMode: true,
});
