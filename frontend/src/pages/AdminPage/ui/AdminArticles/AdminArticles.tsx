import { ArticleTable } from "../../../../components/ArticleTable/ArticleTable";
import MoreInfoModalArticle from "../../../../components/ArticleTable/MoreInfoModal/MoreInfoModalArticle";
// import Article from "../../../../models/Article";
import { Button } from "../../../../shared";
import { useModalStore } from "../../../../stores/modalStore";

export const AdminArticles = () => {
	const { setModalContent, toggleModalIsOpen } = useModalStore();
	return (
		<main className="mx-25 my-8">
			<div className="info flex gap-18 items-center text-2xl">
				<div>Панель администратора</div>
				<div>таблица статей</div>
				<Button
					label="Добавить"
					width="163px"
					height="36px"
					onClick={() => {
						// const newArticle: Article = {
						// 	id: 0,
						// 	title: "",
						// 	description: "",
						// 	text: "",
						// 	images: [],
						// };
						setModalContent(<MoreInfoModalArticle />);
						toggleModalIsOpen();
					}}
				/>
			</div>
			<div className="search h-9 flex gap-4 items-center mt-7 mb-9">
				<input
					type="text"
					placeholder="поиск по имени"
					className="bg-headerbg text-black/30 h-full rounded-2xl pl-8 py-1 text-xl flex items-center flex-grow"
				/>
				<input
					type="button"
					className="bg-headerbg text-heading h-full w-32 border-0 rounded-3xl cursor-pointer"
					value="найти"
				/>
			</div>
			<ArticleTable />
		</main>
	);
};
