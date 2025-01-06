import {useEffect, useState} from "react";
import axios from "axios";
import {Cat} from "../PetsPage/PetsPage.tsx";

// Потом переместить к артиклам
interface Article {
    id: number;
    title: string;
    description?: string;
    text: string;
    images: string[];
}

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    access_token: string; // Предполагается, что сервер возвращает токен
}

async function deleteArticle(id: number) {
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
        const response = await axios.delete(`http://localhost:3000/api/articles/` + id, {
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

export default function AdminPage() {
    const [cats, setCats] = useState<Cat[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

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
            <ul>
                {articles.map((article: Article, id) => (
                    <li key={id}>
                        <h3>{article.title}</h3>
                        <h5>{article.description}</h5>
                        <div>{article.text}</div>
                        {article.images.map(image => (
                            <img key={image} src={image} />
                        ))}
                        <button onClick={async () => {
                            deleteArticle(article.id);
                        }}>Удалить</button>
                    </li>
                ))}
            </ul>
        </>
    )
};