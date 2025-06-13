import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import "./ArticleDetails.css";
import Footer from "../../../components/footer/footer";
import { Article } from '../../../entities/article';

const ArticleDetails = () => {
	const { id } = useParams<{ id: string }>();
	const [article, setArticle] = useState<Article | null>(null);

	useEffect(() => {
		const fetchPetDetails = async () => {
			try {
				const response = await axios.get<Article>(
					`http://localhost:3000/api/articles/${id}`
				);
				setArticle(response.data);
			} catch (error) {
				console.error("Ошибка загрузки данных:", error);
			}
		};

		fetchPetDetails();
	}, [id]);

	if (!article) return <p>Загрузка статьи...</p>;

	return (
		<>
			<Header />
			<div className="article-container">
				<div className="article-header">
					<img
						src={myimg2}
						alt="Article illustration"
						className={"background"}
					/>

					<div className="article-images">
						<img
							src={myimg}
							alt="Article illustration"
							className="main-image"
						/>
					</div>
					<div className="article-title">
						<h1>{article.title}</h1>
					</div>
				</div>
				<div className="article-content">
					<p>
						{article.text} Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Aut deserunt dicta dolor dolorem eaque exercitationem, facilis
						impedit inventore iste labore natus optio porro quasi quis, repellat
						sed ut vel vitae.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ArticleDetails;
