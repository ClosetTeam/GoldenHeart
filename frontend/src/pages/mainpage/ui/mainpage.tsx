import "./mainpage.css";
import catPrevievImg from "../../../shared/assets/images/catPreviev.png";
import catAboutShelterImg from "../../../shared/assets/images/someCats.png";
import { Footer, Header } from "../../../widgets/index.ts";
import { CatCard } from "../../../features/CatCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUnit } from 'effector-react';
import { $cats, fetchCats } from "../../../entities/cat/model";
import arrowImg from "../../../shared/assets/images/arrowRight.png";

export default function Mainpage() {
  const navigate = useNavigate();
  const cats = useUnit($cats);
  const _fetchCats = useUnit(fetchCats);

  useEffect(() => {
    _fetchCats();
  }, []);
  // Плавненько прокручиваем
  const scrollToSection = () => {
    const section = document.getElementById("targetSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Плавненько прокручиваем
    }
  };
  const displayedCats = cats.slice(0, 4); // Display only the first 4 cats
  const remainingCatsCount = cats.length - displayedCats.length;
  return (
    <>
      <Header />
      <div className={"bodymain"}>
        <div className={"mainbtnframe"}>
          <h1 className={"catArticle"}>КАЖДЫЙ КОТИК ЗАСЛУЖИВАЕТ ДОМ</h1>
          <button
            className={"mainBtn chooseCatBtn"}
            onClick={() => navigate("/cats")}
          >
            Выбрать питомца &#8594;
          </button>
          <button className={"mainBtn donateBtn"} onClick={scrollToSection}>
            Пожертвовать
          </button>
          <p className={"firstCatText"}>
            Сделайте доброе дело — подарите заботу и любовь одному из наших
            пушистых друзей в приюте
          </p>
        </div>
        <div className={"catPreviewPhoto"}>
          <img src={catPrevievImg} alt="Здесь должен быть котик :)" />
        </div>
      </div>
      <div className={"articleCatCircle"}>
        <h2 className={"secondCatArticle"}>
          Полезные статьи и последние новости
        </h2>
        <h3 className={"catArticleText"}>
          Читайте истории наших подопечных, советы по уходу за котиками и
          новости из жизни приюта.
        </h3>
        <div className={"catCircle"}>
          <div className={"miniArticlePreview"}></div>
          <div className={"miniArticlePreview"}></div>
          <div className={"miniArticlePreview"}></div>
        </div>
        <button className={"mainBtn showMore"}>Показать ещё</button>
      </div>
      <div className={"aboutShelter"}>
        <div className={"catPhotoShelter"}>
          <img src={catAboutShelterImg} alt="Здесь должны быть котики :)" />
        </div>
        <div className={"textAboutShelter"}>
          <h2 className={"nameShelter"}>ПРИЮТ "ЗОЛОТОЕ СЕРДЦЕ"</h2>
          <p>
            <b>Мы - самый крупный кошачий приют за Уралом</b>
            <br />
            Cоздаём комфортные условия для жизни кошек и&nbsp;стремимся помочь
            им найти любящих хозяев. Каждый питомец получает полноценное
            питание, медицинский уход и заботу. Усыновление происходит
            по&nbsp;договору, с последующей поддержкой и обратной связью
          </p>
        </div>
        {/*Заглушка, дальше должен быть нормальный код*/}
        <div className={"twoCounters"}>
          <div className={"firstCounter"}>
            800 кошек
            <br />
            <p>Уже нашли дом</p>
          </div>
          <div className={"secondCounter"}>
            {remainingCatsCount} кошек
            <br />
            <p>Ещё ждут дом</p>
          </div>
        </div>
        {/*!!!!!*/}
      </div>
      <div className={"howTTHome"}>
        <h2> КАК ЗАБРАТЬ КОТИКА ДОМОЙ?</h2>
        <div className={"text1"}>
          ознакомьтесь
          <br />
          <p>с анкетами кошек на сайте</p>
        </div>
        <div className={"text2"}>
          выберете
          <br />
          <p>будущего любимца</p>
        </div>
        <div className={"text3"}>
          приезжайте
          <br />
          <p>познакомьтесь с котиком лично</p>
        </div>
        <div className={"text4"}>
          приютите
          <br />
          <p>питомца, подарив ему дом</p>
        </div>
      </div>
      <div className={"exampleCatBlocks"}>
        <h2>ПИТОМЦЫ, КОТОРЫЕ ИЩУТ ДОМ</h2>
        {displayedCats.map((cat) => (
          <div key={cat.id}>
            <CatCard {...cat} />
          </div>
        ))}
        <button className={"showMore3"}>
          Все питомцы <img src={arrowImg} alt="стрелочка" />
        </button>
      </div>

      <div className={"howTHShelter"} id={"targetSection"}>
        <h2>КАК ПОМОЧЬ ПРИЮТУ</h2>
        <p>
          Вы можете помочь приюту "Золотое Сердце" любым удобным способом.
          <br />
          Ваша поддержка обеспечивает наших котиков едой, лечением и уютным
          домом
        </p>
        <div className={"donateBlock"}>
          <h3>Пожертвование онлайн</h3>
          <h2>Финансовая помощь</h2>
          <form action="" method="post" className={"donateForm"}>
            <div className={"form-example"}>
              <label htmlFor={"amount"}>Сумма</label>
              <input
                type="text"
                name={"amount"}
                placeholder={"Введите сумму"}
                onChange={() => {}}
              />
            </div>
            <div className={"form-example checkBox"}>
              <input
                type="radio"
                id="radio-1"
                value="month"
                name={"radio"}
                checked={true}
                onChange={() => {}}
              />
              <label htmlFor={"radio-1"} className={"button"}>
                Ежемесячно
              </label>
              <input
                type="radio"
                id="radio-2"
                value="once"
                name={"radio"}
                onChange={() => {}}
              />
              <label htmlFor={"radio-2"} className={"button"}>
                Единоразово
              </label>
            </div>
            <div className={"form-example"}>
              <label htmlFor={"email"}>E-mail</label>
              <input
                type="text"
                name={"email"}
                placeholder={"Введите e-mail"}
                onChange={() => {}}
              />
            </div>
            <div className={"form-example"}>
              <label htmlFor={"userFLN"}>ФИО отправителя</label>
              <input
                type="text"
                name={"userFLN"}
                placeholder={"Введите ФИО"}
                onChange={() => {}}
              />
            </div>
            <div className={"form-example"}>
              <label htmlFor={"userAgree"} className={"userAgree"}>
                <input type="checkbox" name={"userAgree"} onChange={() => {}} />
                Я принимаю <a href="">Условия сервиса</a>
              </label>
            </div>
            <div className={"form-example"}>
              <input type="submit" value={"Пожертвовать"} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
