import styles from "./Button.module.css";

interface CustomButtonProps {
	label: string;
	onClick?: () => void;
	width?: string; // Ширина кнопки
	height?: string; // Высота кнопки
	variant?: "primary" | "secondary" | "gray" | "yellow"; // Новое свойство вместо primary
}

const CustomButton: React.FC<CustomButtonProps> = ({
	label = "Кнопка",
	onClick = () => {},
	width = "100px",
	height = "40px",
	variant = "primary", // Значение по умолчанию
}) => {
	const buttonStyle: React.CSSProperties = {
		width,
		height,
	};

	// Определяем класс в зависимости от variant
	const getButtonClass = () => {
		switch (variant) {
			case "primary":
				return styles.btn;
			case "secondary":
				return styles.btn2;
			case "gray":
				return styles.grayBtn; // Предполагается, что вы добавите этот класс в CSS
			case "yellow":
				return styles.yellowBtn;
			default:
				return styles.btn;
		}
	};

	return (
		<button className={getButtonClass()} style={buttonStyle} onClick={onClick}>
			{label}
		</button>
	);
};

export default CustomButton;
