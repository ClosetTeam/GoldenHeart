export type Cat = {
	id: number;
	name: string;
	description: string;
	age: number;
	sex: string;
	weight: number;
	vaccinated: boolean;
	sterilized: boolean;
	imageUrl?: string;
};

// TODO: заменить на Partial<Cat> для редактирования
export type CatRequest = {
	name: string;
	description: string;
	age: number;
	sex: string;
	weight: number;
	vaccinated: boolean;
	sterilized: boolean;
	imageUrl: string;
};
