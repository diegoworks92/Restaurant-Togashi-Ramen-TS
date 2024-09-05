import { useState, useEffect } from 'react';
import {
	useMenuStore,
	useOrdersStore,
	useCartStore,
	useUserStore,
} from './store/store';

import {
	RiMenu3Fill,
	RiUser3Line,
	RiCloseLine,
	RiLogoutBoxRLine,
} from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';
import Sidebar from './components/Sidebar';
import Car from './components/Car';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Drinks from './components/header/Drinks';
import Desserts from './components/header/Desserts';
import Home from './components/sidebar/Home';
import OrdersTab from './components/sidebar/OrdersTab';
import Ramen from './components/header/Ramen';
import SignIn from './components/user/SignIn';

export const App: React.FC = () => {
	const { showMenu, setShowMenu } = useMenuStore();
	const { showOrder, setShowOrder, showOrdersTab } = useOrdersStore();
	const { setTotal, setCountProducts, setAllProducts } = useCartStore();
	const { logOut, setShowModal, setInputName, name } = useUserStore();

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
		logOut(); // Logs out the user
		setAllProducts([]); // Clears the cart
		setTotal(0);
		setCountProducts(0);
		setShowModal(true);
		setInputName('');
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
			className={`dark:bg-secondary bg-primary bg-repeat w-full min-h-screen font-Nunito font-semibold`}
			/* 			style={{
				backgroundImage:
					theme === 'dark'
						? ''
						: `url('https://img.freepik.com/vector-premium/vector-patrones-fisuras-nube-o-rio-chino-fondo-asiatico-tradicional-diseno-abstracto_87543-7672.jpg')`,
			}} */
			/* 	style={{
				backgroundImage: theme === 'dark' ? '' : `url('/pattern.png')`,
			}} */
			style={{
				backgroundImage: theme === 'dark' ? '' : `url('/pattern.webp')`,
				backgroundSize: '300px 300px', // Ajusta el tamaño de la imagen
				backgroundRepeat: 'repeat', // Hace que la imagen se repita
			}}
		>
			<Sidebar theme={theme} setTheme={setTheme} />
			<SignIn />
			<div>{showOrdersTab ? '' : <Car />}</div>
			<nav className='bg-darkPrimary dark:bg-dark 2xl:hidden fixed w-full bottom-0 left-0 text-3xl text-light py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl z-20'>
				<button onClick={handleExit} className='p-2'>
					{name ? <RiLogoutBoxRLine /> : <RiUser3Line />}
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
					<Header />
					<Routes>
						<Route path='/orders' element={<OrdersTab />} />
						<Route path='/' element={<Home />} />
						<Route path='/ramen' element={<Ramen />} />
						<Route path='/desserts' element={<Desserts />} />
						<Route path='/drinks' element={<Drinks />} />
					</Routes>
				</div>
			</main>
		</div>
	);
};
