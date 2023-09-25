module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
