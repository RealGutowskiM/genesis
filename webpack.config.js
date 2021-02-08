const path = require( "path" );

module.exports = {
        target: "node",
        mode: "production",
        entry: "./src/main.mjs",
        output: {
                filename: "app.js",
                path: path.resolve( __dirname, "dist" ),
        },
};