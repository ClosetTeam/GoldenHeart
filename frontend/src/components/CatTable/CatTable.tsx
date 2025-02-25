import { useEffect } from 'react';
import { useCatStore } from '../../stores/catStore';
import { useModalStore } from '../../stores/modalStore';
import MoreInfoModal from './MoreInfoModal';
import DeleteCatModal from './DeleteCatModal';

const CatTable: React.FC = () => {
  const _description_max = 15;
  const {toggleModalIsOpen, setModalContent} = useModalStore();
  const {cats} = useCatStore();

  useEffect(() => console.log(cats), [cats]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 last:border-0">
        <thead>
          <tr className="bg-gray-100 last:bg-transparent">
            <td className="border p-2 text-center">кличка</td>
            <td className="border p-2 text-center">фото</td>
            <td className="border p-2 text-center">возраст</td>
            <td className="border p-2 text-center">пол</td>
            <td className="border p-2 text-center">прививки</td>
            <td className="border p-2 text-center">стерилизация</td>
            <td className="border p-2 text-center">описание</td>
            <td className="border-0 p-5"></td>
          </tr>
        </thead>
        <tbody>
          {cats.map(cat => (
            <tr key={cat.id} >
              <td className="border p-2 text-center">{cat.name}</td>
              <td className="border p-2">
                <div className="w-12 h-12 overflow-hidden mx-auto flex justify-center items-center">
                  {cat.imageUrl ? (
                  <img 
                    src={`http://localhost:3000${cat.imageUrl}`}
                    alt={cat.name} 
                    className="w-12 h-12 object-cover max-h-full max-w-full"
                  />
                  ) : "-"}
                </div>
              </td>
              <td className="border p-2 text-center">{cat.age}</td>
              <td className="border p-2 text-center">{cat.sex || "-"}</td>
              <td className="border p-2 text-center">{cat.vaccinated ? "Да" : "Нет"}</td>
              <td className="border p-2 text-center">{cat.sterilized ? "Да" : "Нет"}</td>
              <td className="border pl-4 pr-2 py-2 w-64">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-left flex-1 truncate">
                    {cat.description.slice(0, _description_max) + (cat.description.length > _description_max ? '...' : '')}
                  </div>
                  {
                  <div onClick={() => {
                    setModalContent(
                      <MoreInfoModal {...cat} />
                    )
                    toggleModalIsOpen()
                  }} 
                    className="bg-headerbg mr-2 shrink-0 w-9 h-9 gap-0.75 flex justify-center items-center rounded-full cursor-pointer">
                    <div className='bg-white w-1 h-1 rounded'></div>
                    <div className='bg-white w-1 h-1 rounded'></div>
                    <div className='bg-white w-1 h-1 rounded'></div>
                  </div>
                  }
                </div>
              </td>
              <td className="">
                <div onClick={() => {
                  setModalContent(
                    <DeleteCatModal {...cat} />
                  )
                  toggleModalIsOpen()
                }} className="bg-btn w-9 h-9 flex justify-center items-center rounded-full mx-auto cursor-pointer">
                  <div className='bg-white w-6 h-1 rounded'></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;