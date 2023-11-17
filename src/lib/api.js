const API_URL = 'https://cms.baukasten.matthiashacksteiner.net';

// Reusable function for making GET requests
async function fetchData(uri) {
	const response = await fetch(API_URL + uri, {
		method: 'GET',
	});
	console.log('Fetching', uri, response.status, response.statusText);
	if (response.status !== 200) {
		console.log('Error fetching', uri, response.status, response.statusText);
	}
	return response.json();
}

export async function getData(uri) {
	return fetchData(uri);
}

export async function getGlobal() {
	return fetchData('/global.json');
}

export async function getLanguages() {
	const global = await getGlobal();
	return {
		translations: global.translations,
		defaultLang: global.defaultLang,
		allLang: global.allLang,
	};
}
