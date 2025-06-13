import { createEvent, createStore, sample } from 'effector';

export const $isModalOpen = createStore<boolean>(false);
export const $modalContent = createStore<React.ReactNode>(null);

export const toggleModalIsOpen = createEvent();
export const setModalContent = createEvent<React.ReactNode>();

sample({
	clock: toggleModalIsOpen,
	source: $isModalOpen,
	fn: (isOpen: boolean) => !isOpen,
	target: $isModalOpen,
})

sample({
	clock: setModalContent,
	target: $modalContent,
})