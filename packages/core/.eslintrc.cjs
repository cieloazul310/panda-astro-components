module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["src/preset.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
