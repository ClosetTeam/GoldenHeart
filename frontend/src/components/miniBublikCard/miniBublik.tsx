import "./miniBublik.css"
import miniCatImg from "../../assets/cat_img.png";
import arrowImg from "../../assets/arrowRight.png";


export default function miniBublik(){
    // const navigate = useNavigate();


    return(
        <>

            <div className={"exampleCatBlocks"}>
                <h2>ПИТОМЦЫ, КОТОРЫЕ ИЩУТ ДОМ</h2>
                <div className={"catBlock"}>
                    <h3>Бублик</h3>
                    <dl>
                        <dt>Возраст</dt>
                        <dd>2 года</dd>
                        <dt>Пол</dt>
                        <dd>&#9794;</dd>
                        <dt>Прививки</dt>
                        <dd>Да</dd>
                        <dt>Стерилизация</dt>
                        <dd>Да</dd>
                    </dl>
                    <img src={miniCatImg} alt="мини котик)"/>
                    <button className={"showMore2"}>Подробнее</button>
                </div>
                <div className={"catBlock"}>
                    <h3>Бублик</h3>
                    <dl>
                        <dt>Возраст</dt>
                        <dd>2 года</dd>
                        <dt>Пол</dt>
                        <dd>&#9794;</dd>
                        <dt>Прививки</dt>
                        <dd>Да</dd>
                        <dt>Стерилизация</dt>
                        <dd>Да</dd>
                    </dl>
                    <img src={miniCatImg} alt="мини котик)"/>
                    <button className={"showMore2"}>Подробнее</button>
                </div>
                <div className={"catBlock"}>
                    <h3>Бублик</h3>
                    <dl>
                        <dt>Возраст</dt>
                        <dd>2 года</dd>
                        <dt>Пол</dt>
                        <dd>&#9794;</dd>
                        <dt>Прививки</dt>
                        <dd>Да</dd>
                        <dt>Стерилизация</dt>
                        <dd>Да</dd>
                    </dl>
                    <img src={miniCatImg} alt="мини котик)"/>
                    <button className={"showMore2"}>Подробнее</button>
                </div>
                <div className={"catBlock"}>
                    <h3>Бублик</h3>
                    <dl>
                        <dt>Возраст</dt>
                        <dd>2 года</dd>
                        <dt>Пол</dt>
                        <dd>&#9794;</dd>
                        <dt>Прививки</dt>
                        <dd>Да</dd>
                        <dt>Стерилизация</dt>
                        <dd>Да</dd>
                    </dl>
                    <img src={miniCatImg} alt="мини котик)"/>
                    <button className={"showMore2"}>Подробнее</button>
                </div>
                <button className={"showMore3"}>Все питомцы <img src={arrowImg} alt="стрелочка"/></button>
            </div>

        </>
    )
}