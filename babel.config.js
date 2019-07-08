const presets = ["@babel/preset-env", "@babel/preset-react"];
const plugins = [
  "@babel/plugin-proposal-class-properties",
  [
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }
  ]
];

module.exports = { presets, plugins };
