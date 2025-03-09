import "./header.css"
import myProfileImg from "../../assets/personLogo.png"
import {useNavigate} from "react-router-dom";


export default function Header(){
    const navigate = useNavigate();

    return(
        <>
            <header className={"header-header"}>
                <nav className={"headerButtons"}>
                    <div className={"projectName"} onClick={() => navigate("/")}>Золотое сердце</div>
                    <button className={"headerButton"} onClick={() => navigate("/article")}>статьи</button>
                    <button className={"headerButton"}>о приюте</button>
                    {/*<button className={"btn"} onClick={() => navigate("/pets")}>Ищут дом</button>*/}
                    <button className={"headerButton"}>помочь приюту</button>
                    <button className={"headerButton chooseCatBtnHeader"} onClick={() => navigate("/cats")}>Выбрать питомца</button>
                    <button className={"headerButton"}>
                        <img className="logo" src={myProfileImg}
                             onClick={() => {
                                 navigate(`/profile`);
                             }}></img>
                    </button>
                </nav>
            </header>
        </>
    )
}