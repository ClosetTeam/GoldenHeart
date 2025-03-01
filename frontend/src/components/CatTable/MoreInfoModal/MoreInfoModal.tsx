import Cat from '../../../models/Cat';
import { useModalStore } from '../../../stores/modalStore';
import DeleteCatModal from '../DeleteCatModal';
import './MoreInfoModal.css';

export default function MoreInfoModal(cat: Cat) {

  const {toggleModalIsOpen, setModalContent} = useModalStore();


  return (
    <div className='window'>
      <div className='window-header'>
        <p>Описание</p>
        <div className='window-btns'>
          <input type="button" value="Удалить" 
            onClick={() => setModalContent(<DeleteCatModal {...cat} />)} 
            className='window-btn'/>
          <input type="button" value="Отменить" 
            onClick={() => toggleModalIsOpen()}
            className='window-btn'/>
        </div>
      </div>
      <div className='window-card'>
        <div className="info">
          <div className="input-name">
            <input 
              type="text" 
              name="name" 
              className='' 
              value={'Bublik'}
            />
            <div className="underscore"></div>
          </div>
            <ul>
              <li>
                <label htmlFor="age">Возраст</label>
                <div>
                  <input 
                    type="text" 
                    name="age" 
                    value={'2 года'}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              <li>
                <label htmlFor="sex">Пол</label>
                <div>
                  <input 
                    type="text" 
                    name="sex" 
                    value={'M'}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              <li>
                <label htmlFor="vaccinated">Прививки</label>
                <div>
                  <input 
                    type="text" 
                    name="vaccinated" 
                    value={'Да'}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              <li>
                <label htmlFor="sterillized">Стерилизация</label>
                <div>
                  <input 
                    type="text" 
                    name="sterillized" 
                    value={'Да'}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              
            </ul>
        </div>
        <div className="info-image">
          <div>
            {cat.imageUrl ? (
              <img 
                src={`http://localhost:3000${cat.imageUrl}`}
                alt={cat.name} 
                className="cat-image"
              />
              ) : "-"}
          </div>
        </div>
      </div>
      {/* TODO: Image carousel */}
      <div className="add-photo">
        <div className="add-photo-inner">
          <input type="button" value="Добавить фото" className="add-photo-btn"/>
        </div>
      </div>
      <div className="add-text">
        <textarea 
          name="description" 
          className="description"
        />
      </div>
      <div className="save-btn-div">
        <input type="button" value="Сохранить" className="save-btn"/>
      </div>
    </div>
  );
}