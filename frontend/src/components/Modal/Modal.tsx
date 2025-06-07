import { useModalStore } from "../../stores/modalStore";

interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const { isModalOpen, toggleModalIsOpen } = useModalStore();
	if (!isModalOpen) return null;

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50"
			onClick={toggleModalIsOpen}
		>
			<div
				className="bg-white rounded-4xl shadow-lg"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
