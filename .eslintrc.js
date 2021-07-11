module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:jsx-a11y/recommended",
        "react-app"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jsx-a11y"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prop-types": [0, {}],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-console": ["warn"],
        "prefer-const": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "no-extend-native": "off"
    },
    "ignorePatterns": "**/*.min.js"
}