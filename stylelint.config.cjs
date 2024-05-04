module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind"],
      },
    ],
  },
  ignoreFiles: ["build/**/*.css"],
};
