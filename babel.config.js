module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@dtos": "./src/dtos",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@services": "./src/services",
            "@storage": "./src/storage",
            "@hooks": "./src/hooks",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
