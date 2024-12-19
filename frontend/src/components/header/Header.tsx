import "./header.css"
import myimgprofile from "../../assets/logo.png"
import myimgfind from "../../assets/img_1.png"
import {useNavigate} from "react-router-dom";


export default function Header(){
    const navigate = useNavigate();
    return(
        <>
            <header>
                <div className={"projectName"} onClick={() => navigate("/")}>Золотое сердце</div>
                <nav>
                    <button className={"btn"}>О фонде</button>
                    <button className={"btn"}>Проекты</button>
                    <button className={"btn"} onClick={() => navigate("/pets")}>Ищут дом</button>
                    {/*<button className={"btn"}>Статьи</button>*/}
                    <button className={"btn"}>Статьи</button>
                    <button className={"btn"}>Контакты</button>

                </nav>
                <div className={"icons"}>
                    {/*<img className="find" src={myimgfind} onClick={() => {*/}
                    {/*    navigate(`/`);*/}
                    {/*}}></img>*/}
                    <img className="logo" src={myimgprofile} onClick={() => {
                        navigate(`/profile`);
                    }}></img>
                </div>
            </header>
        </>
    )
}