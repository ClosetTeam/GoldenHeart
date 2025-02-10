import { useEffect } from 'react';
import { useCatStore } from '../../stores/catStore';
import { useModalStore } from '../../stores/modalStore';

const CatTable: React.FC = () => {
  const _description_max = 15;
  const {toggleModalIsOpen, setModalContent} = useModalStore();
  const {cats, removeCat} = useCatStore();

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
                      <div className='w-147 py-4 px-8'>
                        <div className='header flex items-center justify-between'>
                          <p className='text-base'>Описание</p>
                          <div className='flex gap-2'>
                            <input type="button" value="Удалить" className='bg-white cursor-pointer text-btn text-xl w-34 h-10 mt-4 mb-3 rounded-full border-2 border-btn'/>
                            <input type="button" value="Отменить" className='bg-white cursor-pointer text-btn text-xl w-34 h-10 mt-4 mb-3 rounded-full border-2 border-btn'/>
                          </div>
                        </div>
                        <div className='w-95 border border-white mx-auto mt-11 rounded-[50px] drop-shadow-sm'>
                          <div className='flex '>
                            <div className='flex flex-col px-10 py-4'>
                              <div className='w-fit'>
                                <div className='text-3xl text-heading'>{cat.name}</div>
                                <div className='h-0.5 border border-dashed'></div>
                              </div>
                              <div className='flex justify-between w-35'>
                                <div>Возраст</div>
                                <div>
                                  <div>{cat.age}</div>
                                  <div className='h-0.5 border border-dashed'></div>
                                </div>
                              </div>
                              <div className='flex justify-between w-35'>
                                <div>Пол</div>
                                <div>
                                  <div>{cat.sex}</div>
                                  <div className='h-0.5 border border-dashed'></div>
                                </div>
                              </div>
                              <div className='flex justify-between w-35'>
                                <div>Прививки</div>
                                <div>
                                  <div>{cat.vaccinated ? "Да" : "Нет"}</div>
                                  <div className='h-0.5 border border-dashed'></div>
                                </div>
                              </div>
                              <div className='flex justify-between w-35'>
                                <div>Стерилизация</div>
                                <div>
                                  <div>{cat.sterilized ? "Да" : "Нет"}</div>
                                  <div className='h-0.5 border border-dashed'></div>
                                </div>
                              </div>
                            </div>
                            <div className='w-28 h-47'>
                              <img src={`http://localhost:3000${cat.imageUrl}`} alt="" className='max-h-full object-contain'/>
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <div className='flex flex-col items-center w-111 p-6'>
                      <div className='h-28 mt-3 flex items-center justify-center'> {/* контейнер с фиксированной высотой */}
                        <img 
                          src="/delete_cat_img.jpg" 
                          alt="Удалить" 
                          className='w-28 max-h-full object-contain'
                        />
                      </div>
                      <p className='mt-8 text-2xl font-bold'>Удалить кота из списка?</p>
                      <input type="button" className='bg-btn cursor-pointer text-white text-xl w-full h-10 mt-10 rounded-full' value='Удалить' onClick={() => {
                        removeCat(cat.id)
                        console.log('cat.id', cat.id)
                        toggleModalIsOpen()
                      }}/>
                      <input type="button" className='bg-white cursor-pointer text-btn text-xl w-full h-10 mt-4 mb-3 rounded-full border-2 border-btn' value='Отменить' onClick={toggleModalIsOpen}/>
                    </div>
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