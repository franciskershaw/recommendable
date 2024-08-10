/** @type {import('prettier'.Config)} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "^[.]",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
