// CatsPage.tsx
import "./CatsPage.css";
import Header from "../../../components/header/Header.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Cat from "../../../models/Cat.ts";
import MiniBublik from "../../../components/miniBublikCard/miniBublik";

const CatsPage = () => {
	const [Cats, setCats] = useState<Cat[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCats = async () => {
			try {
				const response = await axios.get<Cat[]>(
					"http://localhost:3000/api/cats/"
				);
				setCats(response.data);
			} catch (err) {
				setError("Не удалось загрузить данные о питомцах");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCats();
	}, []);

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<Header />
			<div className="Cats-page">
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

					<div className="Cats-grid">
						{Cats.map((Cat) => (
							// <div key={index} className="Cat-card" style={{cursor: "pointer"}} onClick={() => navigate(`/Cat/${Cat.id}`)}>
							//     <img src={Cat.imageUrl ?? catImg} alt={Cat.name} className="Cat-image"/>
							//     <p className="Cat-name">{Cat.name}</p>
							// </div>
							<MiniBublik {...Cat} />
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

export default CatsPage;
