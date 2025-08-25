import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        languageOptions: {
            globals:  globals.browser,
        },
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "react/react-in-jsx-scope": "off",
            'react/display-name': 'warn',
            "@typescript-eslint/no-unused-vars": ["warn", {
                argsIgnorePattern: "^_|^ignored|^unused|^__",
            }],
            "react/prop-types": "warn"
        }
    }
]);