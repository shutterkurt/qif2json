module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: "airbnb-base",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        expect: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "no-continue": "off",
        "linebreak-style": [
            "error",
            process.platform === "win32" ? "windows" : "unix",
        ],
    },
};
