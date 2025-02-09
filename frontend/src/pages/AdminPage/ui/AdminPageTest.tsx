
export default function AdminPageTest() {
	return (
		<>
			<header className='m-5 rounded-xl bg-headerbg h-16'>
				<div className='font-sans text-3xl text-heading'>Золотое сердце</div>
				<ul className='flex gap-7 text-sm pr-60 text-midnight'>
					<li className=''>таблица кошек</li>
					<li>статьи и новости</li>
				</ul>
			</header>
			<main className='mx-25 my-8'>
				<div className="info flex gap-18 items-center text-2xl">
					<div>Панель администратора</div>
					<div>таблица кошек</div>
					<input type='button' className='text-btn border-btn h-9 w-40 border-2 rounded-4xl flex justify-center cursor-pointer' value='Добавить'/>
				</div>
				<div className="search h-9 flex gap-4 items-center mt-7 mb-9">
					<input type="text" placeholder='поиск по имени' className='bg-headerbg text-black/30 h-full rounded-2xl pl-8 py-1 text-xl flex items-center flex-grow'/>
					<input type='button' className='bg-headerbg text-heading h-full w-32 border-0 rounded-3xl cursor-pointer' value='найти'/>
				</div>
				<CatTable />
			</main>
		</>
	)
}
import React, { useState } from "react";

interface Cat {
  id: number;
  name: string;
  age: string;
  gender?: string;
  vaccinated: boolean;
  sterilized: boolean;
  description: string;
  photo?: string;
}

const initialCats: Cat[] = [
  { id: 1, name: "Бублик", age: "5 лет", vaccinated: true, sterilized: true, description: "Дружелюбный котик Дружелюбный котик Дружелюбный котик Дружелюбный котик Дружелюбный котик", photo: "https://avatars.mds.yandex.net/i?id=3854849fff39117370e05b68c3a0861ff02e22c2-5590559-images-thumbs&n=13" },
  { id: 2, name: "Бублик", age: "4 года", vaccinated: true, sterilized: true, description: "Любит играть Любит играть Любит играть" },
  { id: 3, name: "Бублик", age: "2 года", vaccinated: true, sterilized: true, description: "Очень активный Очень активный Очень активный", photo: "/cat2.jpg" },
  { id: 4, name: "Бублик", age: "8 месяцев", vaccinated: true, sterilized: true, description: "Маленький шалун" },
];

const CatTable: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>(initialCats);
  const [expanded, setExpanded] = useState<number | null>(null);
  const _description_max = 15;

  const toggleDescription = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const removeCat = (id: number) => {
    setCats(cats.filter(cat => cat.id !== id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 last:border-0">
        <thead>
          <tr className="bg-gray-100 last:bg-transparent">
            <th className="border p-2">кличка</th>
            <th className="border p-2">фото</th>
            <th className="border p-2">возраст</th>
            <th className="border p-2">пол</th>
            <th className="border p-2">прививки</th>
            <th className="border p-2">стерилизация</th>
            <th className="border p-2">описание</th>
            <th className="border-0 p-5"></th>
          </tr>
        </thead>
        <tbody>
          {cats.map(cat => (
            <tr key={cat.id} >
              <td className="border p-2 text-center">{cat.name}</td>
              <td className="border p-2">
                <div className="w-12 h-12 overflow-hidden mx-auto flex justify-center items-center">
					{cat.photo ? (
					<img 
						src={cat.photo} 
						alt={cat.name} 
						className="w-12 h-12 object-cover max-h-full max-w-full"
					/>
					) : "-"}
				</div>
              </td>
              <td className="border p-2 text-center">{cat.age}</td>
              <td className="border p-2 text-center">{cat.gender || "-"}</td>
              <td className="border p-2 text-center">{cat.vaccinated ? "Да" : "Нет"}</td>
              <td className="border p-2 text-center">{cat.sterilized ? "Да" : "Нет"}</td>
			  <td className="border pl-4 pr-2 py-2 w-64">
				<div className="flex items-center justify-between gap-2">
					<div className="text-left flex-1 truncate">
						{cat.description.slice(0, _description_max) + (cat.description.length > _description_max ? '...' : '')}
					</div>
					{cat.description.length > _description_max && (
					<div onClick={() => toggleDescription(cat.id)} 
						className="bg-headerbg mr-2 shrink-0 w-9 h-9 gap-0.75 flex justify-center items-center rounded-full cursor-pointer">
						<div className='bg-white w-1 h-1 rounded'></div>
						<div className='bg-white w-1 h-1 rounded'></div>
						<div className='bg-white w-1 h-1 rounded'></div>
					</div>
					)}
				</div>
			  </td>
			  <td className="">
                <div onClick={() => removeCat(cat.id)} className="bg-btn w-9 h-9 flex justify-center items-center rounded-full mx-auto">
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
