import "./BublikPage.css"
import myimg from "../../assets/img_2.png"
import myimg2 from "../../assets/img_3.png"
import Header from "../../components/header/Header.tsx";

export default function BublikPage(){
    return(
        <>
            <Header/>
            <div className={"bodyBublikPage"}>
                <div className={"DefaultDiv"}>
                    <button className={"backBut"}>назад</button>
                    <p className={"Name"}>БУБЛИК</p>
                    <p className={"someInfo"}>Текст про бублика Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Adipisci blanditiis cum cumque debitis dolorum eos facilis numquam pariatur quis recusandae, tenetur vitae voluptatibus.
                        Consequuntur delectus ea molestias mollitia nihil nostrum.</p>
                    <div className={"poroda"}>
                        <p className={"someInfo defaultInfo"}>Порода</p>
                        <p className={"someInfo"}>Британская</p>
                    </div>
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
    )
}