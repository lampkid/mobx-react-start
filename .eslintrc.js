module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-mixed-spaces-and-tabs": 2,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/no-string-refs": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "camelcase": 0,
        "no-return-assign": 0,
        "linebreak-style": 0,
        "no-empty": 0,
        "no-else-return": 0,
        "class-methods-use-this": 0,
        "no-restricted-syntax": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "one-var": 0,
    },
    "globals": {
        window: false,
        React: false,
        ReactDOM: false,
        document: false,
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    }
};
