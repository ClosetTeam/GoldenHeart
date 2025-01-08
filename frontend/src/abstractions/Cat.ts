// Интерфейс для питомца
export interface Cat {
    id: number;
    name: string;
    description: string;
    age: number;
    sex: "Male" | "Female";
    weigth: number;
    vaccinated: boolean;
    sterilized: boolean;
    image?: string;
}