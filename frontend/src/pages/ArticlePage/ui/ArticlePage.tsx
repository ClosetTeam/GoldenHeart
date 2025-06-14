import "./ArticlePage.css";
import Header from "../../../widgets/header";
import { useEffect, useState } from "react";
import axios from "axios";
import catImg from "../../../assets/cat_img.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared";
import { Article } from "../../../entities/article";

const ArticlePage = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get<Article[]>(
					"http://localhost:3000/api/articles/"
				);
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
			<Header />
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
							<div
								key={index}
								className="article-card"
								style={{ cursor: "pointer" }}
							>
								<div className="forImage">
									<img
										src={article.images[0] ?? catImg}
										alt={article.title}
										className="article-image"
									/>
								</div>
								<div className="card-text">
									<p className="article-name">{article.title}</p>
									<p className="article-text">{article.text}</p>
									<Button
										width={"147px"}
										height={"40px"}
										variant={"primary"}
										onClick={() => navigate(`/article/${article.id}`)}
										label={"Читать далее"}
									/>
								</div>
							</div>
						))}
						<div className="flex items-center">
							<ul className="mx-auto flex gap-3 pr-100 ">
								<li className="bg-currentpagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer">
									1
								</li>
								<li className="bg-pagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer">
									2
								</li>
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
