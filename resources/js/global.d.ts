import { AxiosInstance } from 'axios';
import { Config as ZiggyConfig, route as ziggyRoute } from 'ziggy-js';

interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at?: string;
}

declare global {
	interface Window {
		axios: AxiosInstance;
	}

	const route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
	interface PageProps {
		auth: {
			user: User;
		};
		ziggy: ZiggyConfig & { location: string };
	}
}
