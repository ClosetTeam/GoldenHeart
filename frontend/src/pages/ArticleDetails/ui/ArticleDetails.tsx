import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUnit } from 'effector-react';
import { Header } from "../../../widgets";
import myimg from "../../../shared/assets/images/img_2.png";
import myimg2 from "../../../shared/assets/images/img_3.png";
import { $currentArticle, fetchArticleById, fetchArticleByIdFx } from "../../../entities/article";
import "./ArticleDetails.css"
import { Footer } from "../../../widgets";

const ArticleDetails = () => {
    const { id } = useParams<{ id: string }>();
    const article = useUnit($currentArticle);
    const _fetchArticleById = useUnit(fetchArticleById);
    const loading = useUnit(fetchArticleByIdFx.pending);

    useEffect(() => {
        if (id) {
            _fetchArticleById(id);
        }
    }, [id, _fetchArticleById]);

    if (loading) return <p>Загрузка статьи...</p>;
    if (!article) return <p>Статья не найдена.</p>;

    return (
        <>
            <Header/>
            <div className="article-container">

                <div className="article-header">
                    <img src={myimg2} alt="Article illustration" className={"background"}/>

                    <div className="article-images">
                        <img src={myimg} alt="Article illustration" className="main-image"/>

                    </div>
                    <div className="article-title">
                        <h1>{article.title}</h1>
                    </div>

                </div>
                <div className="article-content">
                    <p>{article.text}
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ArticleDetails;