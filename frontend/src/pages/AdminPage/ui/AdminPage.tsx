import { useEffect, useState } from "react";
import { useCatStore } from "../../../stores/catStore";
import Modal from "../../../components/Modal/Modal";
import { useModalStore } from "../../../stores/modalStore";
import { Footer } from "./footer/footer";
import { Header } from "./header/Header";
import { AdminCats } from "./AdminCats/AdminCats";
import { AdminArticles } from "./AdminArticles/AdminArticles";

export default function AdminPageTest() {
	const { cats, fetchCats } = useCatStore();
	const { modalContent, } = useModalStore();
	const [isCats, setIsCats] = useState(true)
	const HandleSetIsCats = (isCat:boolean) =>{
		setIsCats(isCat)
	}

	useEffect(() => {
		fetchCats();
		// console.log("fetchCats");
	}, [fetchCats]);

	return (
		<>
			
			<Modal>{modalContent}</Modal>
			<Header updateIsCats={HandleSetIsCats}/>
			{isCats ? <AdminCats/>:<AdminArticles/>}
			<Footer/>
		</>
	);
}
