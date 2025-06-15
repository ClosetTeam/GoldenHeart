import { $cats } from "../../../../entities/cat";
import { useUnit } from "effector-react";

export const Footer = () => {
	const cats = useUnit($cats);

	return (
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
	);
};
