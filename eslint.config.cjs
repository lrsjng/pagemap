const globals = require("globals");

module.exports = [{
    ignores: ["eslint.config.*", "build/", "coverage/", "dist/", "es5/", "local/", "node_modules/"],
}, {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2019,
        sourceType: "commonjs",
    },

    rules: {
        "array-bracket-spacing": [2, "never"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "block-scoped-var": 2,

        "brace-style": [2, "1tbs", {
            allowSingleLine: true,
        }],

        camelcase: 0,
        "comma-dangle": [2, "never"],

        "comma-spacing": [2, {
            before: false,
            after: true,
        }],

        "comma-style": [2, "last"],
        complexity: [1, 16],
        "computed-property-spacing": [2, "never"],
        "consistent-return": 2,
        "consistent-this": [2, "self"],
        "constructor-super": 2,
        curly: [2, "multi-line"],
        "default-case": 2,
        "dot-location": [2, "property"],

        "dot-notation": [2, {
            allowKeywords: true,
        }],

        "eol-last": 2,
        eqeqeq: 2,
        "func-names": 2,

        "func-style": [2, "declaration", {
            allowArrowFunctions: true,
        }],

        "generator-star-spacing": [2, "after"],
        "guard-for-in": 2,
        "handle-callback-err": 2,
        indent: [2, 4],

        "key-spacing": [2, {
            beforeColon: false,
            afterColon: true,
        }],

        "keyword-spacing": [2, {
            before: true,
            after: true,
        }],

        "linebreak-style": [2, "unix"],
        "max-depth": [1, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [1, 3],
        "max-params": [1, 5],
        "max-statements": [1, 48],
        "new-cap": 0,
        "new-parens": 2,
        "newline-after-var": 0,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-console": 0,
        "no-const-assign": 2,
        "no-constant-condition": 1,
        "no-continue": 0,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-else-return": 1,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 1,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 1,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,

        "no-implicit-coercion": [2, {
            boolean: false,
            number: true,
            string: true,
        }],

        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-invalid-this": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 1,
        "no-magic-numbers": 0,
        "no-mixed-requires": [2, false],
        "no-mixed-spaces-and-tabs": [2, false],
        "no-multi-spaces": 2,
        "no-multi-str": 2,

        "no-multiple-empty-lines": [2, {
            max: 4,
        }],

        "no-native-reassign": 1,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 0,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 0,
        "no-path-concat": 2,
        "no-plusplus": 2,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-restricted-modules": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-ternary": 0,
        "no-this-before-super": 2,
        "no-throw-literal": 1,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-unused-expressions": 2,

        "no-unused-vars": [1, {
            vars: "all",
            args: "after-used",
        }],

        "no-use-before-define": 2,
        "no-var": 2,
        "no-void": 2,

        "no-warning-comments": [1, {
            terms: ["todo", "fixme", "xxx"],
            location: "start",
        }],

        "no-with": 2,
        "object-curly-spacing": [2, "never"],
        "object-shorthand": [2, "always"],
        "one-var": [2, "never"],
        "operator-assignment": [2, "always"],
        "operator-linebreak": [2, "after"],
        "padded-blocks": [2, "never"],
        "prefer-arrow-callback": 2,
        "prefer-const": 1,
        "prefer-reflect": 1,
        "prefer-spread": 2,
        "prefer-template": 0,
        "quote-props": [2, "as-needed"],
        quotes: [2, "single", "avoid-escape"],
        radix: 2,
        "require-yield": 2,
        semi: 2,

        "semi-spacing": [2, {
            before: false,
            after: true,
        }],

        "sort-vars": 0,
        "space-before-blocks": [2, "always"],

        "space-before-function-paren": [2, {
            anonymous: "always",
            named: "never",
        }],

        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,

        "space-unary-ops": [2, {
            words: true,
            nonwords: false,
        }],

        "spaced-comment": [2, "always"],
        strict: [2, "never"],
        "use-isnan": 2,
        // "valid-jsdoc": 2,
        "valid-typeof": 2,
        "vars-on-top": 0,
        "wrap-iife": [2, "outside"],
        "wrap-regex": 2,

        yoda: [2, "never", {
            exceptRange: true,
        }],
    },
}];
