const dotenv = require('dotenv')
const env = dotenv.config().parsed;

const config = {
    plugins: [
        new webpack.DefinePlugin({
        'process.env': JSON.stringify(env),
        }),
    ]
};