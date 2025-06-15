import { useState } from "react";
import { catsGate } from "../../../entities/cat";
import { useGate, useUnit } from "effector-react";
import { Footer } from "./footer/footer";
import Modal from "../../../features/Modal/ui/Modal";
import { $modalContent } from "../../../features/Modal/model";
import { Header } from "./header/Header";
import { AdminCats } from "./AdminCats/AdminCats";
import { AdminArticles } from "./AdminArticles/AdminArticles";

export default function AdminPageTest() {
	useGate(catsGate); // Используем gate для загрузки данных
	const modalContent = useUnit($modalContent);
	const [isCats, setIsCats] = useState(true);
	const HandleSetIsCats = (isCat: boolean) => {
		setIsCats(isCat);
	};

	return (
		<>
			<Modal>{modalContent}</Modal>
			<Header updateIsCats={HandleSetIsCats} />
			{isCats ? <AdminCats /> : <AdminArticles />}
			<Footer />
		</>
	);
}
