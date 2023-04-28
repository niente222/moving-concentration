import dotenv from 'dotenv';
import webpack from 'webpack';

const env = dotenv.config().parsed;

const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
};

export default config;