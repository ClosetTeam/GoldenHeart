import { useUnit } from 'effector-react';
import { $isModalOpen, toggleModalIsOpen } from '../model';

interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const isModalOpen = useUnit($isModalOpen);
	const toggleModal = useUnit(toggleModalIsOpen);
	if (!isModalOpen) return null;

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50"
			onClick={toggleModal}
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
