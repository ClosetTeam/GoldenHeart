import Header from "../../components/header/Header.tsx";
import "./bubliks.css"
import BublikCard from "../../components/BublikCard/BublikCard.tsx";

export default function Bubliks(){
    return(
        <>
            <Header/>
            <div className={"bodybubliks"}>
                <h1>Выбрать питомца</h1>
                <div className={"findings"}>
                    <input type={"search"} className={"urFighter"} />
                    <button className={"findbublik"} type={"submit"}>Найти</button>
                </div>
                <div className={"bubliks"}>
                    <BublikCard/>
                    <BublikCard/>
                    <BublikCard/>
                    <BublikCard/>
                    <BublikCard/>
                    <BublikCard/>
                    <BublikCard/>
                </div>
            </div>
        </>
    )
}