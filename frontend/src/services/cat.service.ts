import CatRequest from '../models/CatRequest';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFrc2ltIiwiZW1haWwiOiJOZW9uZXhlcjEyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MTE1MDY0MCwiZXhwIjoxNzQxMjM3MDQwfQ.abgMSd9Epa6SSJF-Mk6KzKU2DXh1dIU8FHJtKOn6ZgY"

export function getAllCats() {
	return fetch("http://localhost:3000/api/cats").then((response) => response.json());
}

export function getCat(id: string){
	return fetch(`http://localhost:3000/api/cats/${id}`).then((response)=> response.json());
}

export async function updateCat(id: number, request: CatRequest) {
	const response = await fetch(`http://localhost:3000/api/cats/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			// TODO: Передавать токен авторизации
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(request),
	});
	return response
}

export function removeCat(id: number) {
	return fetch(`http://localhost:3000/api/cats/${id}`, {
		method: "DELETE",
		headers: {
			// TODO: Передавать токен авторизации
			Authorization: "Bearer " + token,
		},
	});
}

