// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve("@saeris/eslint-config/base"),
    require.resolve("@saeris/eslint-config/react"),
    require.resolve("@saeris/eslint-config/typescript"),
    require.resolve("@saeris/eslint-config/type-aware")
  ],
  ignorePatterns: ["*.js", "build/*"],
  rules: {
    "prefer-named-capture-group": "warn",
    "@typescript-eslint/no-namespace": [
      `error`,
      { allowDeclarations: true, allowDefinitionFiles: true }
    ]
  },
  overrides: [
    {
      // Nextjs uses Default Exports as a convention in the pages directory
      files: [`src/pages/**/*{j,t}s?(x)`],
      rules: {
        "import/no-default-export": "off",
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
