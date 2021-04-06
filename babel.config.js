module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]];
  const plugins = ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime'];

  if (process.env.PROP_TYPES_CHECK === 'omit') {
    plugins.push(['transform-react-remove-prop-types']);
  }

  return {
    presets,
    plugins
  };
};
