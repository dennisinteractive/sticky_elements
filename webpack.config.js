const path = require("path");

module.exports = {
    entry: require.resolve("./js/sticky_elements_init.js"),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "sticky_elements_init.min.js"
    },
    watchOptions: {
        poll: 200 // Check for changes every second
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
