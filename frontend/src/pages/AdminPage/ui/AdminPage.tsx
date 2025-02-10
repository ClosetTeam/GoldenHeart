import { useEffect } from 'react';
import { useCatStore } from '../../../stores/catStore';
import CatTable from '../../../components/CatTable/CatTable';

export default function AdminPageTest() {

	const {cats, fetchCats} = useCatStore();

	useEffect(() => {
		fetchCats();
        console.log("fetchCats");
	}, []);
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
				<CatTable cats={cats}/>
			</main>
			<footer className='flex mx-25 mb-29'>
				<div className='px-8 py-1.5 bg-headerbg rounded-2xl text-black/30'>количество строк - {cats.length}</div>
				<ul className='ml-68 flex gap-3'>
					<li className='bg-currentpagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer'>1</li>
					<li className='bg-pagebg w-7 h-7 rounded-full items-center justify-center flex text-heading cursor-pointer'>2</li>
				</ul>
			</footer>
		</>
	)
}