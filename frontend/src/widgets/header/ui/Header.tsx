import myProfileImg from "../../../shared/assets/personLogo.png";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<div className={styles.projectName} onClick={() => navigate("/")}>
				Золотое сердце
			</div>
			<nav className={styles.headerNav}>
				<button
					className={styles.headerButton}
					onClick={() => navigate("/article")}
				>
					статьи
				</button>
				<button className={styles.headerButton}>о приюте</button>
				<button className={styles.headerButton}>помочь приюту</button>
				<button
					className={`${styles.headerButton} ${styles.chooseCatBtn}`}
					onClick={() => navigate("/cats")}
				>
					Выбрать питомца
				</button>
				<button className={styles.profileButton}>
					<img
						className={styles.profileIcon}
						src={myProfileImg}
						onClick={() => {
							navigate(`/profile`);
						}}
						alt="Профиль"
					/>
				</button>
			</nav>

			{/* Кнопка бургер-меню для мобильных */}
			<button className={styles.mobileMenuButton}>
				<div></div>
				<div></div>
				<div></div>
			</button>
		</header>
	);
}
