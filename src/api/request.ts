const BASE_URL = 'http://localhost:3001';

export default async function request<T>(endpoint = '/', options: RequestInit = {}): Promise<T> {
	const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

	const headers: HeadersInit = options.body ? { 'Content-Type': 'application/json' } : {};

	const response = await fetch(url, {
		headers,
		...options,
	});

	if (!response.ok) {
		throw new Error(`HTTP error: ${response.status}`);
	}

	return response.json();
}
