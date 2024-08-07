// frontend/gallery-microfrontend/webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3003,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'gallery',
      filename: 'remoteEntry.js',
      exposes: {
        './Card': './src/components/Card',
        './ImagePopup': './src/components/ImagePopup',
        './AddPlacePopup': './src/components/AddPlacePopup',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^17.0.1' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^17.0.1' }
      },
    }),
  ],
};
