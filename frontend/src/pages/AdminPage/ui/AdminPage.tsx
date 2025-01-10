import {useEffect, useState} from "react";
import axios from "axios";
import PopupCard from "../../../components/PopupCard/PopupCard.tsx";
import Article from "../../../abstractions/Article.ts";
import {Cat} from "../../../abstractions/Cat.ts";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    access_token: string; // Предполагается, что сервер возвращает токен
}

function deleteArticle(id: number) {
    deleteItem("articles", id)
}

function deleteCat(id: number) {
    deleteItem("cats", id)
}

async function deleteItem(item: string, id: number) {
    try {
        // TODO: Убрать потом добавление токена отсюда
        const loginData:LoginRequest = {
            email: "Neonexer12@gmail.com",
            password: "123",
        }
        try {
            const response = await axios.post<LoginResponse>(`http://localhost:3000/api/users/login`, loginData)
            const {access_token} = response.data;

            console.log('Login successful, token:', access_token);

            // Сохраняем токен в localStorage или другом хранилище
            localStorage.setItem('token', access_token);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Login failed:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
        // TODO: Убрать потом добавление токена отсюда

        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://localhost:3000/api/${item}/` + id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
    }
    catch (e) {
        console.error(e);
    }
}

export function EditCatComponent() {
    // const [formData, setFormData] = useState({
    //     // id: 0,
    //     // name: "",
    //     // description: "",
    //     // age: 0,
    //     // image: "",
    //     // sex: "Male",
    //     // sterilized: false,
    //     // vaccinated: false,
    //     // weight: 0
    // });

    // const [num, setNum] = useState(0);

    // FixMe: При создании хука все ломается
    return (
        <>
            <form
                style={{display: "flex", flexDirection: "column", alignItems: "start"}}
                // onSubmit={(e) => {console.log(formData)}}
            >
                <label htmlFor="name">Имя</label>
                <input id="name"/>

                <label htmlFor="description">Описание</label>
                <input id="description"/>

                <label htmlFor="age">Возраст</label>
                <input id="age" type="number"/>

                <label htmlFor="sex">Пол</label>
                <select id="sex">
                    <option value="Male">Мальчик</option>
                    <option value="Female">Девочка</option>
                </select>

                <label htmlFor="weight">Вес</label>
                <input id="weight" type="number"/>

                <label htmlFor="vaccinated">Вакцинирован</label>
                <input id="vaccinated" type="checkbox"/>

                <label htmlFor="sterilized">Стерилизован</label>
                <input id="sterilized" type="checkbox"/>

                <label htmlFor="image">Изображение</label>
                <input id="image" type="file" accept="image/*"/>

                <button type="submit">Создать</button>
            </form>
        </>
    )
}

export default function AdminPage() {
    const [cats, setCats] = useState<Cat[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

    const [isOpen, setIsOpen] = useState(false);

    // Функции для открытия и закрытия окна
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const [modalContent, setModalContent] = useState(<>Modal</>);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get<Cat[]>("http://localhost:3000/api/cats/");
                setCats(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        const fetchArticles = async () => {
            try {
                const response = await axios.get<Article[]>("http://localhost:3000/api/articles/");
                setArticles(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCats();
        fetchArticles();
    }, [cats, articles]);
    return (
        <>
            <h1>Admin</h1>
            <details>
                <summary>Cats</summary>
                <ul>
                    {cats.map((cat: Cat, id) => (
                        <li key={id} style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
                            <h3>{cat.name}</h3>
                            <h5>{cat.description}</h5>
                            <h5>{cat.age}</h5>
                            <h5>{cat.sex}</h5>
                            <h5>{cat.sterilized}</h5>
                            <h5>{cat.vaccinated}</h5>
                            <h5>{cat.weight}</h5>
                            <button onClick={async () => {
                                // TODO: Edit cat
                                setModalContent(EditCatComponent)
                                openPopup();
                            }} style={{cursor: "pointer"}}>Изменить
                            </button>
                            <button onClick={async () => {
                                deleteCat(cat.id);
                            }} style={{cursor: "pointer", backgroundColor: "red"}}>Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </details>
            <details>
                <summary>Articles</summary>
                <ul>
                {articles.map((article: Article, id) => (
                    <li key={id}>
                        <h3>{article.title}</h3>
                        <h5>{article.description}</h5>
                        <div>{article.text}</div>
                        {article.images.map(image => (
                            <img key={image} src={image} style={{width: '50px', height: '50px'}}/>
                        ))}
                        <button onClick={async () => {
                            // TODO: Edit article
                            openPopup();
                        }} style={{cursor: "pointer"}}>Изменить
                        </button>
                        <button onClick={async () => {
                            deleteArticle(article.id);
                        }} style={{cursor: "pointer", backgroundColor: "red"}}>Удалить
                        </button>
                    </li>
                ))}
                </ul>
            </details>
            <PopupCard isOpen={isOpen} onClose={closePopup}>
                <h2>{modalContent}</h2>
            </PopupCard>
        </>
    )
};