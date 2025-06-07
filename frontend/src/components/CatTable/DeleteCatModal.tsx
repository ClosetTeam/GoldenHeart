import Cat from "../../models/Cat";
import { useCatStore } from "../../stores/catStore";
import { useModalStore } from "../../stores/modalStore";

export default function DeleteCatModal(cat: Cat) {
	const { toggleModalIsOpen } = useModalStore();
	const { removeCat } = useCatStore();

	return (
		<div className="flex flex-col items-center w-111 p-6">
			<div className="h-28 mt-3 flex items-center justify-center">
				{" "}
				{/* контейнер с фиксированной высотой */}
				<img
					src="/delete_cat_img.jpg"
					alt="Удалить"
					className="w-28 max-h-full object-contain"
				/>
			</div>
			<p className="mt-8 text-2xl font-bold">Удалить кота из списка?</p>
			<input
				type="button"
				className="bg-btn cursor-pointer text-white text-xl w-full h-10 mt-10 rounded-full"
				value="Удалить"
				onClick={() => {
					removeCat(cat.id);
					console.log("cat.id", cat.id);
					toggleModalIsOpen();
				}}
			/>
			<input
				type="button"
				className="bg-white cursor-pointer text-btn text-xl w-full h-10 mt-4 mb-3 rounded-full border-2 border-btn"
				value="Отменить"
				onClick={toggleModalIsOpen}
			/>
		</div>
	);
}
