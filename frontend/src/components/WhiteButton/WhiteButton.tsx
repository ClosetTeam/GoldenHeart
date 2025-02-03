import "./WhiteButton.css"
const WhiteButton = ({children, classname, ref, type}) => {
    return (
        <button className={classname ? classname : "button"} ref={ref} type={type}>{children}</button>
    )
}
export default WhiteButton