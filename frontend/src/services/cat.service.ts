export function getAllCats() {
	return fetch("http://localhost:3000/api/cats").then((response) => response.json());
}