module.exports = {
    parser: '@typescript-eslint/parser', // 指定ESLint解析器
    // parser: "babel-eslint"
    extends: [
        'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
        'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
        'prettier/@typescript-eslint', // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 8, // 允许解析最新的 ECMAScript 特性
        sourceType: 'module', // 允许使用 import
        ecmaFeatures: {
            jsx: true // 允许对JSX进行解析
        }
    },
    rules: {
        // 自定义规则
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/ban-types': 1,
        "react/prop-types": 0,
        'no-extra-semi': 2, //禁止多余的冒号
        'no-irregular-whitespace': 2, //不能有不规则的空格
        'no-multiple-empty-lines': [2, { max: 2 }], //空行最多不能超过2行
        'no-multi-spaces': 1, //不能用多余的空格
        'linebreak-style': [0, 'windows'], //换行风格
        'no-undef': 0, //不能有未定义的变量
        camelcase: 2, //强制驼峰法命名
        'generator-star-spacing': 0, // allow async-await
        'no-async-promise-executor': 0,
        "react/no-multi-comp": 0,
        "react/display-name": 0,
        "no-unused-expressions": 0,
        "linebreak-style": [0, "windows"],//换行风格
        "no-unused-expressions": 0,
        "no-multiple-empty-lines": [2, {"max": 2}],//空行最多不能超过2行
        "no-nested-ternary": 0,//禁止使用嵌套的三目运算
        "no-trailing-spaces": 2,//一行结束后面不要有空格
        "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
        "newline-after-var": 2,//变量声明后是否需要空一行
        "space-before-blocks": [2, "always"],//不以新行开始的块{前面要不要有空格
        'generator-star-spacing': 0,
        "space-after-keywords": [0, "always"],//关键字后面是否要空一格
        'block-spacing': 2, // 禁止或强制在代码块中开括号前和闭括号后有空格
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
        'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
        'no-underscore-dangle': 1, //标识符不能以_开头或结尾
        'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        'no-unreachable': 2, //不能有无法执行的代码
        'no-unused-expressions': 2, //禁止无用的表达式
        'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
        'comma-spacing': 2, //逗号前后的空格
        'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
        'no-spaced-func': 2 //函数调用时 函数名与()之间不能有空格
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 0
            }
        }
    ],
    settings: {
        react: {
            version: 'detect' // 告诉 eslint-plugin-react 自动检测 React 的版本
        }
    }
};
