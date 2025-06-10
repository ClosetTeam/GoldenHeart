import "./Header.css"

export const Header = (props: { updateIsCats: (arg0: boolean) => void; }) => {



    return (
        <header className="m-5 p-5 rounded-xl bg-headerbg h-16 flex justify-between items-center">
            <div className="font-sans text-3xl text-heading">
                <a href="../">Золотое сердце</a>
            </div>
            <ul className="flex gap-7 text-sm pr-22 text-midnight">
                <li className="navigateLinks" onClick={() => {props.updateIsCats(true); console.log("true")}}>таблица кошек
                </li>
                <li className="navigateLinks" onClick={() => {props.updateIsCats(false); console.log("false")}}>статьи и новости</li>
            </ul>
        </header>
    )
}