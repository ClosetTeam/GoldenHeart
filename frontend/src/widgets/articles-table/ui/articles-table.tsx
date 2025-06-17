import styles from "./articles-table.module.scss";

type Props = {
	articles: Array<{
		id: string;
		title: string;
		img?: string;
	}>;
	onEdit: (id: string) => void;
	onRemove: (id: string) => void;
};

export default function ArticlesTable(props: Props) {
	return (
		<div className={styles.articlesTable}>
			{props.articles.map((article) => (
				<div key={article.id} className={styles.articleItem}>
					<div className={styles.articleImageContainer}>
						{!!article?.img && (
							<img
								src={article.img}
								alt={article.title}
								className={styles.articleImage}
							/>
						)}
						<button
							className={`${styles.btn} ${styles.editBtn}`}
							onClick={() => props.onEdit(article.id)}
						></button>
						<button
							className={`${styles.btn} ${styles.removeBtn}`}
							onClick={() => props.onRemove(article.id)}
						></button>
					</div>
					<h3 className={styles.articleTitle}>{article.title}</h3>
				</div>
			))}
		</div>
	);
}
