const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@components": path.resolve(__dirname, "src/components/"),
    "@pages": path.resolve(__dirname, "src/pages/"),
    "@routes": path.resolve(__dirname, "src/routes/"),
    "@layouts": path.resolve(__dirname, "src/layouts/"),
    "@configs": path.resolve(__dirname, "src/configs/"),
    "@assets": path.resolve(__dirname, "src/assets/")
  };

  return config;
};
