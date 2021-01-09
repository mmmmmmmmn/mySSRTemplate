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
    overrides: [
        {
            files: ['*.js'],
            extends: ['eslint:recommended', 'plugin:prettier/recommended'],
            rules: {
                eqeqeq: 2,
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
            plugins: ['@typescript-eslint'],
            rules: {
                eqeqeq: 2,
                'no-unreachable': 2,
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
