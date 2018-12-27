const env = {
  production: {
    plugins: [
      "@babel/plugin-transform-react-inline-elements",
      [
        "transform-react-remove-prop-types",
        {
          mode: "remove",
          removeImport: true,
        },
      ],
    ],
  },
};

const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
      targets: {
        browsers: [
          "last 2 versions",
          "ie >= 11",
        ],
      },
    },
  ],
  "@babel/preset-react",
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import",
];

module.exports = {
  env,
  plugins,
  presets,
};