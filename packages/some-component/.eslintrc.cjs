module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
