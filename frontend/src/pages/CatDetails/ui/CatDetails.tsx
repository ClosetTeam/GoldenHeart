import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./CatDetails.css";
import Header from "../../../components/header/Header.tsx";
import Slider from "../../../components/Slider/newSlider1.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import Cat from "../../../models/Cat.ts";
import {Button} from "../../../shared"; // Картинка по умолчанию
//import {useCatStore} from "../../../stores/catStore.ts"

const CatDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isExpanded, setIsExpanded] = useState(false);
  //const {cats, fetchCats} = useCatStore()
  const [Cat, setCat] = useState<Cat | null>(null);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchCatDetails = async () => {
      try {
        // TODO: Убрать запрос и сделать через стор
        const response = await axios.get<Cat>(
          `http://localhost:3000/api/cats/${id}`
        );
        setCat(response.data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchCatDetails();
  }, [id]);

  if (!Cat) return <p>Загрузка информации о коте...</p>;

  return (
    <>
      <Header />
      <div className={"bodyBublikPage"}>
        <div className={"mainBlock"}>
          <button className={"backBut"} onClick={() => navigate("/cats")}>
            назад
          </button>
          <h3>Золотое Сердце</h3>
          <h1>{Cat.name}</h1>

          <div className={"defaultInfo"}>
            <div className={`text-content ${isExpanded ? "visible" : ""}`}>
              <p>{Cat.description}</p>
            </div>
            <button className={"nextTextBut"} onClick={toggleText}>
              {isExpanded ? "Скрыть текст" : "Читать далее"}
            </button>
          </div>

          <div className={"someInfoTable"}>
            <dl className={`infoTable ${isExpanded ? "visible" : ""}`}>
              <dt>Возраст</dt>
              <dd>{Cat.age} года</dd>
              <dt>Пол</dt>
              <dd className={"genderPlace"}>
                {Cat.sex === "Male" ? "♂" : "♀"}
              </dd>
              <dt>Вакцинация</dt>
              <dd>{Cat.vaccinated ? "Да" : "Нет"}</dd>
              <dt>Стерилизация</dt>
              <dd>{Cat.sterilized ? "Да" : "Нет"}</dd>
            </dl>

            <div className={"askButtons"}>
              <Button
                width={"20vh"}
                primary
                onClick={() => {}}
                label={"Задать вопрос"}
              />
              <Button
                width={"20vh"}
                onClick={() => {}}
                label={"Забрать домой"}
              />
            </div>
          </div>
        </div>
        <div className={"fon"}>
          <img className={"picture1"} src={myimg} />
          <img className={"picture2"} src={myimg2} />
        </div>
      </div>
      <Slider />
    </>
  );
};

export default CatDetails;
