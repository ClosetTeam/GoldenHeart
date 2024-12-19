import imgbublik from "../../assets/img_2.png"
import "./BublikCard.css"
export default function BublikCard(){
    return(
       <>
           <div className={"bublikCard"}>
               <img className={"bublikImg"} src={imgbublik}/>
               <div className={"Name"}>БУБЛИК</div>
               <p className={"Description"}>Что-то о бублике здесь. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                   speriores doloremque eius, excepturi in
                   inventore, itaque maxime minima molestias natus
                   necessitatibus neque nostrum,
                   pariatur quam quas similique sit veritatis voluptates. . Lorem ipsum dolor sit amet, tibus neque nostrum,</p>
           </div>
       </>
    )
}