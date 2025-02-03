import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PetDetails.css";
import Header from "../../../components/header/Header.tsx";
import myimg from "../../../assets/img_2.png";
import myimg2 from "../../../assets/img_3.png";
import {Cat} from "../../../abstractions/Cat.ts";
import WhiteButton from "../../../components/WhiteButton/WhiteButton.tsx"; // Картинка по умолчанию

const PetDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [pet, setPet] = useState<Cat | null>(null);

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get<Cat>(`http://localhost:3000/api/cats/${id}`);
                setPet(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        fetchPetDetails();
    }, [id]);

    if (!pet) return <p>Загрузка информации о коте...</p>;

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
                    <h1 className={"Name"}>{pet.name}</h1>
                    <div className={"defaultInfo"}>
                        <p>{pet.description}</p>
                        <button className={"nextTextBut"}>Читать далее</button>
                    </div>

                    <table className={"someInfoTablle"}>
                        <tr>
                            <th>Возраст</th>
                            <th>Пол</th>
                            <th>Вакцинация</th>
                            <th>Стерилизация</th>

                        </tr>
                        <tr>
                            <td>{pet.age} года</td>
                            <td>{pet.sex === "Male" ? "Мужской" : "Женский"}</td>
                            <td>{pet.vaccinated ? "Да" : "Нет"}</td>
                            <td>{pet.sterilized ? "Да" : "Нет"}</td>
                        </tr>
                    </table>

                    {/*<div classname={"someInfo"}>*/}
                    {/*    <div className={"Info_Item"}>Возраст: <div> {pet.age} года </div> </div>*/}
                    {/*    <div className={"Info_Item"}>Пол: {pet.sex === "Male" ? "Мужской" : "Женский"} </div>*/}
                    {/*    /!*<p>Вес: {pet.weight} кг </p>*!/*/}
                    {/*    <div className={"Info_Item"}>Вакцинация: {pet.vaccinated ? "Да" : "Нет"} </div>*/}
                    {/*    <div className={"Info_Item"}>Стерилизация: {pet.sterilized ? "Да" : "Нет"} </div>*/}
                    {/*</div>*/}

                    <div className={"pet-Buttons"}>
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

export default PetDetails;
