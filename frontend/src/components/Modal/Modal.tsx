import { useModalStore } from '../../stores/modalStore';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const {isModalOpen, toggleModalIsOpen} = useModalStore();
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50" onClick={toggleModalIsOpen}>
      <div className="bg-white p-6 rounded-4xl shadow-lg w-111" onClick={(e) => e.stopPropagation()}>
        {/* <h2 className="text-xl font-semibold">Модальное окно</h2>
        <p className="mt-2">Содержимое модального окна</p>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={toggleModalIsOpen}
    {children}
          Закрыть
        </button> */}
		{children}
      </div>
    </div>
  );
};

export default Modal;