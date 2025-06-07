// Интерфейс для питомца
export default interface Cat {
	id: number;
	name: string;
	description: string;
	age: number;
	sex: string;
	weight: number;
	vaccinated: boolean;
	sterilized: boolean;
	imageUrl?: string;
}
