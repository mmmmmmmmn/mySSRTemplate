module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
    plugins: ['react'],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        eqeqeq: 2,
        'no-var': 2,
        'prefer-const': 2,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
            plugins: ['@typescript-eslint'],
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
