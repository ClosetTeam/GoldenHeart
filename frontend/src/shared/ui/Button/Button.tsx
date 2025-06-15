import styles from "./Button.module.css";

interface CustomButtonProps {
	label: string;
	onClick: () => void;
	width?: string; // Ширина кнопки
	height?: string; // Высота кнопки
	primary?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	label = "Кнопка",
	onClick = () => {},
	width = "100px", // Значение по умолчанию
	height = "40px", // Значение по умолчанию
	primary = true,
}) => {
	const buttonStyle: React.CSSProperties = {
		width,
		height,
	};

	return (
		<button
			className={primary ? styles.btn : styles.btn2}
			style={buttonStyle}
			onClick={onClick}
		>
			{label}
		</button>
	);
};
export default CustomButton;
