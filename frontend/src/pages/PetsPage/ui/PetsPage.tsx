// PetsPage.tsx
import "./PetsPage.css";
import Header from "../../../components/header/Header.tsx";
import catImg from "../../../assets/cat_img.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Cat} from "../../../abstractions/Cat.ts";

const PetsPage = () => {

    const [pets, setPets] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get<Cat[]>("http://localhost:3000/api/cats/");
                setPets(response.data);
            } catch (err) {
                setError("Не удалось загрузить данные о питомцах");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header/>
            <div className="pets-page">
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

                    <div className="pets-grid">
                        {pets.map((pet, index) => (
                            <div key={index} className="pet-card" style={{cursor: "pointer"}} onClick={() => navigate(`/pet/${pet.id}`)}>
                                <img src={pet.image ?? catImg} alt={pet.name} className="pet-image"/>
                                <p className="pet-name">{pet.name}</p>
                            </div>
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

export default PetsPage;
