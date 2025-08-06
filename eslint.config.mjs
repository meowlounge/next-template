/*
 * Copyright (c) 2025 prodbyeagle
 * SPDX-License-Identifier: MIT
 */

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import header from 'eslint-plugin-simple-header';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next'),
	{ ignores: ['dist'] },
	{
		files: ['src/**/*.{tsx,ts,mts,mjs,js,jsx}', 'eslint.config.mjs'],
		settings: {
			react: {
				version: '18',
			},
		},
		...react.configs.flat.recommended,
		rules: {
			...react.configs.flat.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/display-name': 'off',
			'react/no-unescaped-entities': 'off',
		},
	},
	{
		plugins: {
			'simple-header': header,
			'@stylistic': stylistic,
			'@typescript-eslint': tseslint.plugin,
			'unused-imports': unusedImports,
		},
		settings: {
			'import/resolver': {
				map: [
					['@lib', './src/lib'],
					['@utils', './src/utils'],
					['@hooks', './src/hooks'],
					['@components', './src/components'],
				],
			},
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			'simple-header/header': [
				'error',
				{
					files: ['header.txt'],
					templates: {
						author: ['.*', 'prodbyeagle'],
					},
				},
			],
			'unused-imports/no-unused-imports': 'error',

			// Style Rules
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/block-spacing': ['error', 'always'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/spaced-comment': [
				'error',
				'always',
				{ markers: ['!'] },
			],
			'@stylistic/no-extra-semi': 'error',
		},
	},
];

export default eslintConfig;
