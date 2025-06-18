import styles from "./Button.module.css";
import { type ButtonVariant } from "./Types.ts";

interface CustomButtonProps {
	label: string;
	onClick?: () => void;
	variant?: ButtonVariant;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	label = "Кнопка",
	onClick = () => {},
	variant = "primary",
}) => {
	const getButtonClass = () => {
		switch (variant) {
			case "primary":
				return styles.btn;
			case "secondary":
				return styles.btn2;
			case "gray":
				return styles.grayBtn;
			case "yellow":
				return styles.yellowBtn;
			default:
				return styles.btn;
		}
	};

	return (
		<button className={getButtonClass()} onClick={onClick}>
			{label}
		</button>
	);
};

export default CustomButton;
