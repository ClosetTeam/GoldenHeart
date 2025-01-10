import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import {Article} from "../../../abstractions/Article.ts"; // Картинка по умолчанию

const PetDetails = () => {
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

export default PetDetails;
