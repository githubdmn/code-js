# tscode

TypeScript code

## TypeScript config

```
	npx tsc --init --rootDir src --outDir build \
	--esModuleInterop --resolveJsonModule --lib es6 \
	--module commonjs --allowJs true --noImplicitAny true
```

## Nodemon config - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts && tsc"
}
```
## Prettier config - .prettierrc

```
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```
## Eslint config - .eslintrs.js

```
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'build/', 'dist/'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
```

### nodemon starts with prettier 
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "prettier --config .prettierrc 'src/**/*.ts' --write && ts-node ./src/index.ts && tsc"
}
```
