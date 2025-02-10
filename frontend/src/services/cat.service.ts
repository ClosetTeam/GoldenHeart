export function getAllCats() {
	return fetch("http://localhost:3000/api/cats").then((response) => response.json());
}

export function removeCat(id: number) {
	return fetch(`http://localhost:3000/api/cats/${id}`, {
		method: "DELETE",
		headers: {
			// TODO: Передавать токен авторизации
			Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFrc2ltIiwiZW1haWwiOiJOZW9uZXhlcjEyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTE3NTAzMywiZXhwIjoxNzM5MjYxNDMzfQ.qFA5xpfq8gDlDKrEYZQ-MYpE8F3Vwlxj1p5P9rqIgtU",
		},
	});
}