import "./ArticlePage.css";
import { Header } from "../../../widgets";
import { useEffect } from "react";
import { useUnit } from 'effector-react';
import catImg from "../../../shared/assets/images/cat_img.png"
import {useNavigate} from "react-router-dom";
import { $articles, fetchArticles, fetchArticlesFx } from "../../../entities/article";
import CustomButton from "../../../shared/ui/Button/Button.tsx"

const ArticlePage = () => {

    const articles = useUnit($articles);
    const _fetchArticles = useUnit(fetchArticles);
    const loading = useUnit(fetchArticlesFx.pending);

    const navigate = useNavigate();

    useEffect(() => {
        _fetchArticles();
    }, [_fetchArticles]);

    if (loading) return <p>Загрузка...</p>;
    if (!articles.length && !loading) return <p>Статьи не найдены.</p>;

    return (
        <>
            <Header/>
            <div className="article-page">
                <div className="main">
                    <div className="title">Полезные статьи и последние новости</div>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="поиск по имени, названию приюта"
                            className="search-input"
                        />
                        <button className="search-button">найти</button>
                    </div>

                    <div className="article-grid">
                        {articles.map((article, index) => (
                            <div key={index} className="article-card" style={{cursor: "pointer"}}>
                                <div className="forImage">
                                    <img src={article.images[0] ?? catImg} alt={article.title}
                                         className="article-image"/>
                                </div>
                                <div className="card-text">
                                    <p className="article-name">{article.title}</p>
                                    <p className="article-text">{article.text}</p>
                                    <CustomButton className={"nextBtn"} width={"147px"} height={"40px"} isWhite={true} onClick={()=>navigate(`/article/${article.id}`)} label={"Читать далее"}/>
                                </div>

                            </div>
                        ))}
                        <div className='flex items-center'>
                            <ul className='mx-auto flex gap-3 pr-100 '>
                                <li className='bg-currentpagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer'>1</li>
                                <li className='bg-pagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer'>2</li>
                            </ul>
                        </div>
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
