import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import Article from "../../../models/Article.ts"; // Картинка по умолчанию

const ArticleDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [Article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get<Article>(`http://localhost:3000/api/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        fetchPetDetails();
    }, [id]);

    if (!Article) return <p>Загрузка статьи...</p>;

    return (
        <>
            <Header/>
            <div className={"ArticleBody"}>
                <div className={"Article-Head"}>
                    <img src={myimg}/>
                    <h1>{Article.title}</h1>
                </div>
                <div className={"Article-Text"}>
                    <p>{Article.text}</p>
                </div>
            </div>
        </>
    );
};

export default ArticleDetails;
