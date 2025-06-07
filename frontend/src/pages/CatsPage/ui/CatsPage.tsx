// CatsPage.tsx
import "./CatsPage.css";
import { Header } from "../../../widgets";
import { useEffect } from "react";
import { useUnit } from 'effector-react';
import { $cats, fetchCats } from "../../../entities/cat/model";
import CatCard from "../../../features/CatCard/ui/cat-card"

const CatsPage = () => {

    const cats = useUnit($cats);
    const _fetchCats = useUnit(fetchCats);

    useEffect(() => {
        _fetchCats();
    }, [_fetchCats]);

    if (!cats.length) return <p>Загрузка...</p>;

    return (
        <>
            <Header/>
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
                        {cats.map((cat) => (
                            <div key={cat.id}>
                                <CatCard {...cat}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatsPage;
