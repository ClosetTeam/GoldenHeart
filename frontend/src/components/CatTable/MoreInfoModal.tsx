import Cat from '../../models/Cat';
import { useModalStore } from '../../stores/modalStore';

export default function MoreInfoModal(cat: Cat) {

  const {toggleModalIsOpen} = useModalStore();

  return (
    <div className='w-147 py-4 px-8'>
      <div className='header flex items-center justify-between'>
        <p className='text-base'>Описание</p>
        <div className='flex gap-2'>
          <input type="button" value="Удалить" className='bg-white cursor-pointer text-btn text-xl w-34 h-10 mt-4 mb-3 rounded-full border-2 border-btn'/>
          <input type="button" value="Отменить" 
          onClick={() => toggleModalIsOpen()}
          className='bg-white cursor-pointer text-btn text-xl w-34 h-10 mt-4 mb-3 rounded-full border-2 border-btn'/>
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
  );
}