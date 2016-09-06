function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        bundle: getEntrySources([
            './src/main.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'dist/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
