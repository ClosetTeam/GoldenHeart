import miniCatImg from "../../../shared/assets/images/cat_img.png";
import { type Cat } from "../../../entities/cat";
import { useNavigate } from "react-router-dom";
import styles from "./cat-card.module.css";

export default function CatCard(Cat: Cat) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.catBlock}>
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
          className={styles.showMore2}
          onClick={() => navigate(`/Cat/${Cat.id}`)}
        >
          Подробнее
        </button>
      </div>
    </>
  );
}
