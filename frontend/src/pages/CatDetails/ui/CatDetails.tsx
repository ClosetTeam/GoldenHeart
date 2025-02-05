import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CatDetails.css";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import {Cat} from "../../../abstractions/Cat.ts";
import WhiteButton from "../../../components/WhiteButton/WhiteButton.tsx"; // Картинка по умолчанию

const CatDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [Cat, setCat] = useState<Cat | null>(null);

    useEffect(() => {
        const fetchCatDetails = async () => {
            try {
                const response = await axios.get<Cat>(`http://localhost:3000/api/cats/${id}`);
                setCat(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        fetchCatDetails();
    }, [id]);

    if (!Cat) return <p>Загрузка информации о коте...</p>;

    return (
        // <div className="Cat-details">
        //     <h1>{Cat.name}</h1>
        //     <img src={Cat.image ?? catImg} alt={Cat.name} />
        //     <p>Описание: {Cat.description}</p>
        //     <p>Возраст: {Cat.age} года</p>
        //     <p>Пол: {Cat.sex === "Male" ? "Мужской" : "Женский"}</p>
        //     <p>Вес: {Cat.weigth} кг</p>
        //     <p>Вакцинация: {Cat.vaccinated ? "Да" : "Нет"}</p>
        //     <p>Стерилизация: {Cat.sterilized ? "Да" : "Нет"}</p>
        // </div>
        <>
            <Header/>
            <div className={"bodyBublikPage"}>
                <div className={"DefaultDiv"}>
                    <button className={"backBut"}>назад</button>
                    <h1 className={"Name"}>{Cat.name}</h1>
                    <div className={"defaultInfo"}>
                        <p>{Cat.description}</p>
                        <button className={"nextTextBut"}>Читать далее</button>
                    </div>

                    <table className={"someInfoTable"}>
                        <tr>
                            <th>Возраст</th>
                            <th>Пол</th>
                            <th>Вакцинация</th>
                            <th>Стерилизация</th>

                        </tr>
                        <tr>
                            <td>{Cat.age} года</td>
                            <td>{Cat.sex === "Male" ? "Мужской" : "Женский"}</td>
                            <td>{Cat.vaccinated ? "Да" : "Нет"}</td>
                            <td>{Cat.sterilized ? "Да" : "Нет"}</td>
                        </tr>
                    </table>

                    {/*<div classname={"someInfo"}>*/}
                    {/*    <div className={"Info_Item"}>Возраст: <div> {Cat.age} года </div> </div>*/}
                    {/*    <div className={"Info_Item"}>Пол: {Cat.sex === "Male" ? "Мужской" : "Женский"} </div>*/}
                    {/*    /!*<p>Вес: {Cat.weight} кг </p>*!/*/}
                    {/*    <div className={"Info_Item"}>Вакцинация: {Cat.vaccinated ? "Да" : "Нет"} </div>*/}
                    {/*    <div className={"Info_Item"}>Стерилизация: {Cat.sterilized ? "Да" : "Нет"} </div>*/}
                    {/*</div>*/}

                    <div className={"Cat-Buttons"}>
                        <WhiteButton>Задать вопрос</WhiteButton>
                        <WhiteButton classname={'button2'}>забрать домой</WhiteButton>
                    </div>
                </div>


                <div className={"fon"}>
                    <img className={"picture1"} src={myimg}/>
                    <img className={"picture2"} src={myimg2}/>
                </div>

            </div>
            {/*<div className={"Photos"}>*/}
            {/*    <div className="sim-slider">*/}
            {/*        <ul className="sim-slider-list">*/}
            {/*            <li className="sim-slider-element"><img src={myimg} alt="1"/></li>*/}
            {/*            <li className="sim-slider-element"><img src={myimg} alt="2"/></li>*/}

            {/*            <li className="sim-slider-element"><img src={myimg} alt="N"/></li>*/}
            {/*        </ul>*/}
            {/*        <div className="sim-slider-arrow-left"></div>*/}
            {/*        <div className="sim-slider-arrow-right"></div>*/}
            {/*        <div className="sim-slider-dots"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default CatDetails;
