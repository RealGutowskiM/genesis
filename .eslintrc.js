module.exports = {
        "env": {
                "browser": true,
                "es2021": true,
                "node": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
                "ecmaVersion": 12,
                "sourceType": "module"
        },
        "rules": {
                quotes: [ "error", "double" ],
                "object-curly-spacing": [ "error", "always" ],
                "array-bracket-spacing": [ "error", "always" ],
                "computed-property-spacing": [ "error", "always" ],
                "space-in-parens": [ "error", "always" ],
                "func-names": [ "error", "always" ],
                "indent": [ "error", 8 ],
                "vars-on-top": "error"
        }
};
