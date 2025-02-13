import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import {Article} from "../../../models/Article.ts"; // Картинка по умолчанию

const CatDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [Article, setPet] = useState<Article | null>(null);

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get<Article>(`http://localhost:3000/api/article/${id}`);
                setPet(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        fetchPetDetails();
    }, [id]);

    if (!Article) return <p>Загрузка информации о коте...</p>;

    return (

        // <div className="pet-details">
        //     <h1>{pet.name}</h1>
        //     <img src={pet.image ?? catImg} alt={pet.name} />
        //     <p>Описание: {pet.description}</p>
        //     <p>Возраст: {pet.age} года</p>
        //     <p>Пол: {pet.sex === "Male" ? "Мужской" : "Женский"}</p>
        //     <p>Вес: {pet.weigth} кг</p>
        //     <p>Вакцинация: {pet.vaccinated ? "Да" : "Нет"}</p>
        //     <p>Стерилизация: {pet.sterilized ? "Да" : "Нет"}</p>
        // </div>

        <>
            <Header/>
            <div className={"bodyBublikPage"}>
                <div className={"DefaultDiv"}>
                    <button className={"backBut"}>назад</button>
                    <p className={"Name"}>{Article.title}</p>
                    <p className={"someInfo"}>{Article.description}</p>
                    <p className={"ArticleText"}>{Article.text}</p>
                    <div className={"BubliksButtons"}>
                        <button className={"mainbtn"}>Задать вопрос</button>
                        <button className={"mainbtn"}>забрать домой</button>
                    </div>
                </div>
                <div className={"fon"}>
                    <img src={myimg}/>
                    <img src={myimg2}/>
                </div>
            </div>
        </>
    );
};

export default CatDetails;
