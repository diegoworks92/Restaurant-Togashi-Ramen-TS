import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	RiHome6Line,
	RiPercentLine,
	RiMailLine,
	RiLogoutBoxRLine,
	RiUser3Line,
	/* 	RiNotification2Line, */
} from 'react-icons/ri';
import { TbApi } from 'react-icons/tb';
import { FaCartShopping } from 'react-icons/fa6';
import { MdDarkMode, MdOutlineLightMode, MdPhotoCamera } from 'react-icons/md';
import {
	useMenuStore,
	useOrdersStore,
	useCartStore,
	useUserStore,
} from '../store/store';
import Logo from './sidebar/Logo';

const Sidebar: React.FC<SidebarProps> = ({ theme, setTheme }) => {
	const navigate = useNavigate();

	const [color, setColor] = useState(false);

	const { isOrdersActive, setIsOrdersActive, setShowOrdersTab, showOrdersTab } =
		useOrdersStore();

	const { setCountProducts, setAllProducts, setTotal } = useCartStore();

	const { logOut, isActive, setIsActive, setShowModal, setInputName, name } =
		useUserStore();

	const {
		showMenu,
		activeButton,
		setActiveButton,

		setHeaderButton,
	} = useMenuStore();

	const toggleOrdersTab = (id: number) => {
		setShowOrdersTab(!showOrdersTab);
		setColor(!color);
		setActiveButton(id);
		setIsOrdersActive(false);
	};

	const toggleOrdersTabF = (id: number) => {
		setShowOrdersTab(false);
		setColor(!color);
		setActiveButton(id);
	};

	const handleExit = (_id: number) => {
		logOut();
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		setIsActive(true);
		setShowModal(true);
		setInputName('');
	};

	const buttonActions: {
		[key: number]: () => void;
		default: (id: number) => void;
	} = {
		1: () => {
			homeClick(1);
			toggleOrdersTabF(1);
		},
		2: () => {
			toggleOrdersTab(2);
			orderClick(2);
		},
		3: () => {
			discountClick(3);
			toggleOrdersTabF(3);
		},
		4: () => {
			contactClick(4);
			toggleOrdersTabF(4);
		},

		6: () => {
			galleryClick(6);
			toggleOrdersTabF(6);
		},
		7: () => handleChangeTheme(),
		8: () => {
			handleExit(8);
			homeClick(8);
			toggleOrdersTabF(8);
		},
		9: () => {
			window.open('https://togashi-api.vercel.app/', '_blank');
		},
		default: (id: number) => toggleOrdersTabF(id),
	};

	const handleButtonClick = (id: number) => {
		setIsActive(true);
		setActiveButton(id);
		if (id === 1) {
			setHeaderButton(1);
		} else {
			setHeaderButton(-1);
		}
		buttonActions[id] ? buttonActions[id]() : buttonActions.default(id);
	};

	useEffect(() => {
		if (isActive) {
			toggleOrdersTabF(1);
		}
	}, [isActive]);

	useEffect(() => {
		if (isOrdersActive) {
			toggleOrdersTab(2);
			setIsActive(false);
			setTimeout(() => {
				const contactoElement = document.getElementById('orders');
				if (contactoElement) {
					contactoElement.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	}, [isOrdersActive]);

	const sidebar = [
		{
			id: 1,
			buttons: [
				{ id: 1, link: '/', icons: <RiHome6Line /> },
				{
					id: 2,
					link: '/orders',
					icons: <FaCartShopping />,
					showOnLarge: true,
				},
				{ id: 3, link: '/', icons: <RiPercentLine /> },
				/* 	{ id: 5, link: '/notification', icons: <RiNotification2Line /> }, */
				{ id: 4, link: '/', icons: <RiMailLine /> },
				{ id: 6, link: '/', icons: <MdPhotoCamera /> },
				{
					id: 7,
					icons: theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />,
				},
				{
					id: 8,
					link: '/',
					icons: name ? <RiLogoutBoxRLine /> : <RiUser3Line />,
				},
				{
					id: 9,
					icons: <TbApi />,
				},
			],
		},
	];

	const handleChangeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const scrollToElement = (id: string) => {
		navigate('/');
		setTimeout(() => {
			const elemento = document.getElementById(id);
			if (elemento) {
				elemento.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};

	const homeClick = (_id: number) => scrollToElement('home');
	const orderClick = (_id: number) => scrollToElement('orders');
	const discountClick = (_id: number) => scrollToElement('discount');
	const contactClick = (_id: number) => scrollToElement('contact');
	const galleryClick = (_id: number) => scrollToElement('gallery');

	return (
		<div /* bg-opacity-95 */
			className={`bg-darkPrimary  dark:bg-dark fixed 2xl:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
				showMenu ? 'left-0' : '-left-full'
			}`}
		>
			<div>
				<ul className='pl-4'>
					<Logo />
					<div>
						{sidebar.map((data) => (
							<div key={data.id}>
								{data.buttons.map((button) =>
									button.showOnLarge ? (
										<li
											key={button.id}
											className={`2xl:block hidden hover:bg-primary dark:hover:bg-secondary p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
										>
											<Link to={button.link}>
												<button
													className={`${
														activeButton === button.id
															? 'bg-fall dark:bg-darkSecondary text-light dark:text-light'
															: 'text-light dark:text-darkSecondary'
													} ${
														isActive ? 'active' : ''
													} text-2xl group-hover:bg-fall dark:group-hover:bg-darkSecondary flex justify-center p-4 rounded-xl  group-hover:text-light transition-colors`}
													onClick={() => handleButtonClick(button.id)}
												>
													<span>{button.icons} </span>
												</button>
											</Link>
										</li>
									) : (
										<li
											key={button.id}
											className={`hover:bg-primary  dark:hover:bg-secondary p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}
										>
											<Link to={button.link!}>
												<button
													className={`${
														activeButton === button.id
															? 'bg-fall dark:bg-darkSecondary text-light dark:text-light'
															: 'text-light dark:text-darkSecondary'
													} ${
														isActive ? 'active' : ''
													} text-2xl group-hover:bg-fall dark:group-hover:bg-darkSecondary flex justify-center p-4 rounded-xl group-hover:text-light transition-colors`}
													onClick={() => handleButtonClick(button.id)}
												>
													<span>{button.icons} </span>
												</button>
											</Link>
										</li>
									),
								)}
							</div>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
