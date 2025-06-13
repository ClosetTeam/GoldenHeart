import "./miniBublik.css";
import miniCatImg from "../../assets/cat_img.png";
import { useNavigate } from "react-router-dom";
import { Cat } from "../../entities/cat";

export default function MiniBublik(Cat: Cat) {
	const navigate = useNavigate();
	return (
		<>
			<div className={"catBlock"}>
				<h3>{Cat.name}</h3>
				<dl>
					<dt>Возраст</dt>
					<dd>{Cat.age}</dd>
					<dt>Пол</dt>
					<dd>{Cat.sex}</dd>
					<dt>Прививки</dt>
					<dd>{Cat.vaccinated ? "Да" : "Нет"}</dd>
					<dt>Стерилизация</dt>
					<dd>{Cat.sterilized ? "Да" : "Нет"}</dd>
				</dl>
				<img src={miniCatImg} alt="мини котик)" />
				<button
					className={"showMore2"}
					onClick={() => navigate(`/Cat/${Cat.id}`)}
				>
					Подробнее
				</button>
			</div>
		</>
	);
}
