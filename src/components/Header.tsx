import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMenuStore, useUserStore } from '../store/store';
import Login from './header/Login';
import { useLocation } from 'react-router-dom';

const Header: React.FC<UserNameType> = ({ userName, setUserName }) => {
	/* date */
	const [date] = useState(new Date());

	const { isActive, setIsActive } = useUserStore();

	const { setActiveButton, headerButton, setHeaderButton } = useMenuStore();

	const location = useLocation();

	useEffect(() => {
		if (isActive === true) {
			headerButton;
			setHeaderButton(1);
		} else {
			setHeaderButton(-1);
		}
	}, [isActive]);

	useEffect(() => {
		// Sets the active button based on the current route
		const currentPath = location.pathname;
		const buttonId = namesBtn.find((btn) => btn.link === currentPath)?.id || -1;
		setHeaderButton(buttonId);
	}, [location]);

	const toggleOrdersTabF = (id: number) => {
		if (id === 2 || id === 3 || id === 4) {
			setIsActive(false);
			setHeaderButton(id);
			setActiveButton(-1);
		}
		setIsActive(true);
		setHeaderButton(id);
		if (id === 1) {
			// Activate the button in the Sidebar
			setActiveButton(1);
		}
	};

	const namesBtn = [
		{
			id: 1,
			name: 'Home',
			link: '/',
		},
		{
			id: 2,
			name: 'Ramen',
			link: '/ramen',
		},
		{
			id: 3,
			name: 'Drinks',
			link: '/drinks',
		},
		{
			id: 4,
			name: 'Desserts',
			link: '/desserts',
		},
	];

	return (
		<header id='home'>
			{/* Title */}
			<div className='flex flex-col items-center gap-4 md:flex-row md:justify-between '>
				<img
					className=' w-24 h-32 2xl:w-20 2xl:h-24'
					src='logo.ico'
					alt='logo of a cat dressed as a ninja eating ramen'
				/>
				<div>
					<h1 className=' text-xl sm:text-2xl text-dark dark:text-light md:-mt-11 text-shadow '>
						{' '}
						{userName.trim() === '' ? (
							<Login userName={userName} setUserName={setUserName} />
						) : (
							<>
								<span>Welcome</span>{' '}
								<span className='notranslate'> {userName} </span>
							</>
						)}
					</h1>
					<p className='sm:text-xl text-center md:text-left text-dark dark:text-light dark:opacity-50 dark:block text-shadow dark:text-shadow-none'>
						{userName.trim() === '' ? '' : `${date.toLocaleDateString()}`}
					</p>
				</div>
			</div>
			{/* Tabs */}
			<nav className='text-light dark:text-light bg-secondary flex items-center justify-between md:justify-start md:gap-8 border-b dark:border-light mb-8 font-bold rounded-lg dark:rounded-none'>
				{namesBtn.map((names) => (
					<Link to={names.link} key={names.id}>
						<button onClick={() => toggleOrdersTabF(names.id)}>
							<p
								className={`${
									headerButton === names.id
										? 'before:w-1/3 before:h-[2px] before:absolute  before:dark:bg-primary before:left-0 before:rounded-full before:-bottom-[1px] text-fall dark:text-primary '
										: ''
								} relative py-2 pr-4 hover:text-fall dark:hover:text-primary font-Nunito ml-2`}
							>
								{names.name}
							</p>
						</button>
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
