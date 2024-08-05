const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:3000/',
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
      name: 'main_app',
      remotes: {
        auth: 'auth@http://localhost:3001/remoteEntry.js',
        profile: 'profile@http://localhost:3002/remoteEntry.js',
        gallery: 'gallery@http://localhost:3003/remoteEntry.js',
        likes: 'likes@http://localhost:3004/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^17.0.1' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^17.0.1' }
      },
    }),
  ],
};
