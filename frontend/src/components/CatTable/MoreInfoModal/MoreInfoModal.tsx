import { useState } from 'react';
import Cat from '../../../models/Cat';
import { useModalStore } from '../../../stores/modalStore';
import DeleteCatModal from '../DeleteCatModal';
import './MoreInfoModal.css';
import { useCatStore } from '../../../stores/catStore';
import CatRequest from '../../../models/CatRequest';

export default function MoreInfoModal(cat: Cat) {

  const {toggleModalIsOpen, setModalContent} = useModalStore();
  const {updateCat} = useCatStore();
  const [name, setName] = useState(cat.name);
  const [age, setAge] = useState(cat.age);
  const [sex, setSex] = useState(cat.sex);
  const [vaccinated, setVaccinated] = useState(cat.vaccinated);
  const [sterilized, setSterilized] = useState(cat.sterilized);
  const [description, setDescription] = useState(cat.description);


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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="underscore"></div>
          </div>
            <ul>
              <li>
                <label htmlFor="age">Возраст</label>
                <div>
                  <input 
                    type="number" 
                    name="age" 
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
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
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              <li>
                <label htmlFor="vaccinated">Прививки</label>
                <div>
                  <input 
                    type="checkbox" 
                    name="vaccinated" 
                    checked={vaccinated}
                    onChange={(e) => setVaccinated(e.target.checked)}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              <li>
                <label htmlFor="sterillized">Стерилизация</label>
                <div>
                  <input 
                    // TODO: Add checkbox
                    type="checkbox" 
                    name="sterillized" 
                    checked={sterilized}
                    onChange={(e) => setSterilized(e.target.checked)}
                  />
                  <div className="underscore"></div>
                </div>
              </li>
              
            </ul>
        </div>
        <div className="info-image">
          <div>
            {cat.imageUrl ? (
              // TODO: Возможность замены изображения
              <img 
                src={`http://localhost:3000${cat.imageUrl}`}
                alt={cat.name} 
                className="cat-image"
              />
              ) : 
              "-"
              }
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="save-btn-div">
        <input type="button" value="Сохранить" className="save-btn"
        onClick={() => {
          const updatedCat: CatRequest = {
            name: name,
            description: description,
            age: age,
            sex: sex,
            weight: 0,
            vaccinated: vaccinated,
            sterilized: sterilized,
            imageUrl: cat.imageUrl ? cat.imageUrl : ""
          }
          updateCat(cat.id, updatedCat)
            .then(() => console.log("Updated successfully"))
            .catch(() => console.log("Failed to update"));

          toggleModalIsOpen();
        }}/>
      </div>
    </div>
  );
}