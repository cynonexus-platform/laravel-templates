import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) => {
			return resolvePageComponent(
				`/${name}.tsx`,
				import.meta.glob('/modules/*/resources/Pages/**/*.tsx'),
			);
		},
		setup: ({ App, props }) => {
			return <App {...props} />;
		},
	}),
);
