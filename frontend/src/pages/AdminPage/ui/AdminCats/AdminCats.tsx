import { Cat } from "../../../../entities/cat";
import { Button } from "../../../../shared";
import CatTable from "../../../../components/CatTable/CatTable";
import MoreInfoModal from "../../../../components/CatTable/MoreInfoModal/MoreInfoModal";
import { useModalStore } from "../../../../stores/modalStore";

export const AdminCats = () => {
	const { setModalContent, toggleModalIsOpen } = useModalStore();
	return (
		<main className="mx-25 my-8">
			<div className="info flex gap-18 items-center text-2xl">
				<div>Панель администратора</div>
				<div>таблица кошек</div>
				<Button
					label="Добавить"
					width="163px"
					height="36px"
					onClick={() => {
						const newCat: Cat = {
							id: 0,
							name: "",
							description: "",
							age: 0,
							sex: "",
							weight: 0,
							vaccinated: false,
							sterilized: false,
							imageUrl: "",
						};
						setModalContent(<MoreInfoModal cat={newCat} method="add" />);
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
			<CatTable />
		</main>
	);
};
