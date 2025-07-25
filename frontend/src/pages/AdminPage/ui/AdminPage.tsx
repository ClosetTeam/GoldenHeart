import CatTable from "../../../components/CatTable/CatTable";
import Modal from "../../../features/Modal/ui/Modal";
import MoreInfoModal from "../../../components/CatTable/MoreInfoModal/MoreInfoModal";
import { Button } from "../../../shared";
import { $cats, Cat, catsGate } from "../../../entities/cat";
import { useGate, useUnit } from "effector-react";
import {
	$modalContent,
	setModalContent as setModalContentEv,
	toggleModalIsOpen as toggleModalIsOpenEv,
} from "../../../features/Modal/model";

export default function AdminPageTest() {
	useGate(catsGate); // Используем gate для загрузки данных
	const cats = useUnit($cats); // Получаем список котов из стора
	const modalContent = useUnit($modalContent);
	const setModalContent = useUnit(setModalContentEv);
	const toggleModalIsOpen = useUnit(toggleModalIsOpenEv);

	return (
		<>
			<Modal>{modalContent}</Modal>
			<header className="m-5 p-5 rounded-xl bg-headerbg h-16 flex justify-between items-center">
				<div className="font-sans text-3xl text-heading">
					<a href="../">Золотое сердце</a>
				</div>
				<ul className="flex gap-7 text-sm pr-22 text-midnight">
					<li className="">таблица кошек</li>
					<li>статьи и новости</li>
				</ul>
			</header>
			<main className="mx-25 my-8">
				<div className="info flex gap-18 items-center text-2xl">
					<div>Панель администратора</div>
					<div>таблица кошек</div>
					<Button
						label="Добавить"
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
			<footer className="flex mx-25 mb-29">
				<div className="px-8 py-1.5 bg-headerbg rounded-2xl text-black/30">
					количество строк - {cats.length}
				</div>
				<ul className="mx-auto flex gap-3 pr-100">
					<li className="bg-currentpagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer">
						1
					</li>
					<li className="bg-pagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer">
						2
					</li>
				</ul>
			</footer>
		</>
	);
}
