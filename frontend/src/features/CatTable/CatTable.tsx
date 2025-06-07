import { useUnit } from 'effector-react';
import { $cats } from '../../entities/cat/model';
import { setModalContent, toggleModalIsOpen } from '../../shared/ui/Modal/model';
import MoreInfoModal from './MoreInfoModal/MoreInfoModal';
import DeleteCatModal from './DeleteCatModal';
import './CatTable.css'

const CatTable: React.FC = () => {
  const _description_max = 15;
  const _toggleModalIsOpen = useUnit(toggleModalIsOpen);
  const _setModalContent = useUnit(setModalContent);
  const cats = useUnit($cats);

  return (
    <div className="table-container">
      <table className="cat-table">
        <thead>
          <tr className="table-header">
            <td className="header-cell">кличка</td>
            <td className="header-cell">фото</td>
            <td className="header-cell">возраст</td>
            <td className="header-cell">пол</td>
            <td className="header-cell">прививки</td>
            <td className="header-cell">стерилизация</td>
            <td className="header-cell">описание</td>
            <td className="last-header-cell"></td>
          </tr>
        </thead>
        <tbody>
          {cats.map(cat => (
            <tr key={cat.id}>
              <td className="cell">{cat.name}</td>
              <td className="cell">
                <div className="image-container">
                  {cat.imageUrl ? (
                  <img 
                    src={`http://localhost:3000${cat.imageUrl}`}
                    alt={cat.name} 
                    className="cat-image"
                  />
                  ) : "-"}
                </div>
              </td>
              <td className="cell">{cat.age}</td>
              <td className="cell">{cat.sex || "-"}</td>
              <td className="cell">{cat.vaccinated ? "Да" : "Нет"}</td>
              <td className="cell">{cat.sterilized ? "Да" : "Нет"}</td>
              <td className="description-cell">
                <div className="description-container">
                  <div className="description-text">
                    {cat.description.slice(0, _description_max) + (cat.description.length > _description_max ? '...' : '')}
                  </div>
                  <div 
                    onClick={() => {
                      _setModalContent(
                        <MoreInfoModal cat={cat} method='edit' />
                      )
                      _toggleModalIsOpen()
                    }}
                    className="info-button"
                  >
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              </td>
              <td className="action-cell">
                <div 
                  onClick={() => {
                    _setModalContent(
                      <DeleteCatModal {...cat} />
                    )
                    _toggleModalIsOpen()
                  }} 
                  className="delete-button"
                >
                  <div className="delete-line"></div>
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