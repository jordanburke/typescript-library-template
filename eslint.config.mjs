import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.gitignore",
        "**/.eslintignore",
        "**/node_modules",
        "**/.DS_Store",
        "**/dist-ssr",
        "**/*.local",
        "**/tsconfig.json",
    ],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.amd,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },

    settings: {
        "import/resolver": {
            node: {
                paths: ["'src'"],
                extensions: [".js", ".ts"],
            },
        },
    },

    rules: {
        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],

        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
}];