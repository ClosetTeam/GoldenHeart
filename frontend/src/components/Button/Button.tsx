import React from 'react';
import classNames from "classnames"
import "./Button.css"

interface CustomButtonProps {
    label: string;
    onClick: () => void;
    width?: string;  // Ширина кнопки
    height?: string; // Высота кнопки
    className?: string
    isWhite?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       className,
                                                       label="Кнопка",
                                                       onClick= ()=>{},
                                                       width = '100px', // Значение по умолчанию
                                                       height = '40px', // Значение по умолчанию
                                                       isWhite = false,
                                                   }) => {
    const buttonStyle: React.CSSProperties = {
        width,
        height,
    };
    const classes = classNames(
        isWhite? 'btn':'btn2',
        className
    )
    return (
        <button className={classes} style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    )
}
export default CustomButton;