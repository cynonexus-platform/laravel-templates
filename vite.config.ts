import forms from '@tailwindcss/forms';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		laravel({
			input: 'resources/js/app.tsx',
			ssr: 'resources/js/ssr.tsx',
			refresh: true,
		}),
		react(),
	],
	css: {
		postcss: {
			plugins: [
				tailwindcss({
					content: [
						'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
						'./storage/framework/views/*.php',
						'./resources/views/**/*.blade.php',
						'./resources/js/**/*.tsx',
						'./modules/*/resources/**/*.tsx',
					],
					theme: {
						extend: {
							fontFamily: {
								sans: ['Figtree', ...defaultTheme.fontFamily.sans],
							},
						},
					},
					plugins: [forms],
				}),
				autoprefixer({}),
			],
		},
	},
});
