import { useState, useEffect } from 'react';
import {
	useMenuStore,
	useOrdersStore,
	useCartStore,
	useUserStore,
} from './store/store';

import { RiMenu3Fill, RiUser3Line, RiCloseLine } from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';
import Sidebar from './components/Sidebar';
import Car from './components/Car';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Drinks from './components/header/Drinks';
import HotDishes from './components/header/HotDishes';
import Home from './components/sidebar/Home';
import OrdersTab from './components/sidebar/OrdersTab';
import Ramen from './components/header/Ramen';
import SignOff from './components/user/SignOff';

export const App: React.FC = () => {
	const { showMenu, setShowMenu } = useMenuStore();
	const { showOrder, setShowOrder, showOrdersTab } = useOrdersStore();
	const { setTotal, setCountProducts, setAllProducts } = useCartStore();
	const { logOut, setShowModal } = useUserStore();

	const [userName, setUserName] = useState('');

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);

		const timer = setTimeout(() => {
			setShowMenu(false);
		}, 6000);
		return () => clearTimeout(timer);
	};

	const toggleOrders = () => {
		setShowMenu(false);
		setShowOrder(!showOrder);
	};

	const handleExit = () => {
		logOut(); // Cierra la sesión del usuario
		setAllProducts([]); // Limpia el carrito
		setTotal(0);
		setCountProducts(0);
		setUserName(''); // Vacía el nombre de usuario
		setShowModal(true);
	};

	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	});

	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html')!.classList.add('dark');
		} else {
			document.querySelector('html')!.classList.remove('dark');
		}
	}, [theme]);

	return (
		<div
			className={`dark:bg-secondary bg-repeat w-full min-h-screen font-Nunito font-semibold`}
			style={{
				backgroundImage:
					theme === 'dark'
						? ''
						: `url('https://img.freepik.com/vector-premium/vector-patrones-fisuras-nube-o-rio-chino-fondo-asiatico-tradicional-diseno-abstracto_87543-7672.jpg')`,
			}}
		>
			<Sidebar theme={theme} setTheme={setTheme} setUserName={setUserName} />
			<SignOff userName={userName} setUserName={setUserName} />
			<div>{showOrdersTab ? '' : <Car />}</div>
			<nav className='bg-dark 2xl:hidden fixed w-full bottom-0 left-0 text-3xl text-light py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl z-20'>
				<button onClick={handleExit} className='p-2'>
					<RiUser3Line />
				</button>
				<button onClick={toggleOrders} className='p-2'>
					<FaCartShopping />
				</button>
				<button className='text-light p-2' onClick={toggleMenu}>
					{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
				</button>
			</nav>
			<main className='2xl:pl-32 2xl:pr-96 pb-20'>
				<div className='md:p-8 p-4'>
					<Header userName={userName} setUserName={setUserName} />
					<Routes>
						<Route path='/orders' element={<OrdersTab />} />
						<Route path='/' element={<Home />} />
						<Route path='/ramen' element={<Ramen />} />
						<Route path='/hotdishes' element={<HotDishes />} />
						<Route path='/drinks' element={<Drinks />} />
					</Routes>
				</div>
			</main>
		</div>
	);
};
