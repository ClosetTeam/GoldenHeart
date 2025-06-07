import { create } from "zustand";

interface ModalState {
	isModalOpen: boolean;
	toggleModalIsOpen: () => void;
	modalContent: React.ReactNode;
	setModalContent: (content: React.ReactNode) => void;
}

export const useModalStore = create<ModalState>((set) => ({
	isModalOpen: false,
	toggleModalIsOpen: () =>
		set((state) => ({ isModalOpen: !state.isModalOpen })),
	modalContent: null,
	setModalContent: (content) => set(() => ({ modalContent: content })),
}));
