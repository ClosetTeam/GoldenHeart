
import "./ArticlePage.css";
import Header from "../../../components/header/Header.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import catImg from "../../../assets/cat_img.png"
import {useNavigate} from "react-router-dom";
import {Article} from "../../../abstractions/Article.ts";

const ArticlePage = () => {

    const [Articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get<Article[]>("http://localhost:3000/api/articles/");
                setArticles(response.data);
            } catch (err) {
                setError("Не удалось загрузить данные о питомцах");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header/>
            <div className="pets-page">
                <div className="main">
                    <div className="title">Выбрать питомца</div>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="поиск по имени, названию приюта"
                            className="search-input"
                        />
                        <button className="search-button">найти</button>
                    </div>

                    <div className="pets-grid">
                        {Articles.map((Article, index) => (
                            <div key={index} className="pet-card" style={{cursor: "pointer"}}>
                                <img src={Article.images[0] ?? catImg} alt={Article.title} className="pet-image"/>
                                <p className="pet-name">{Article.title}</p>
                            </div>
                        ))}
                    </div>

                    {/*<footer className="pagination">*/}
                    {/*    <button className="page-button">1</button>*/}
                    {/*    <button className="page-button">2</button>*/}
                    {/*</footer>*/}
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
