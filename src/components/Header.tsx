import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMenuStore, useUserStore } from '../store/store';
import { useLocation } from 'react-router-dom';
import User from './header/User';

const Header: React.FC = () => {
	/* date */
	/* 	const [date] = useState(new Date()); */

	const { setIsActive } = useUserStore();

	const { setActiveButton, headerButton, setHeaderButton } = useMenuStore();

	const location = useLocation();

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
			{/* Tabs */}

			<nav className='text-light dark:text-light bg-darkPrimary dark:bg-secondary flex items-center justify-between md:justify-start md:gap-8 dark:border-b dark:border-light mb-8 font-bold rounded-lg dark:rounded-none'>
				{namesBtn.map((names) => (
					<Link to={names.link} key={names.id}>
						<button onClick={() => toggleOrdersTabF(names.id)}>
							<p
								className={`${
									headerButton === names.id
										? 'before:w-1/3 before:h-[2px] before:absolute  before:dark:bg-fall before:left-0 before:rounded-full before:-bottom-[1px] text-fall dark:text-fall'
										: ''
								} relative py-2 pr-4 hover:text-fall dark:hover:text-fall font-Nunito ml-2`}
							>
								{names.name}
							</p>
						</button>
					</Link>
				))}
				<User className='hidden md:block ml-auto' />
			</nav>
		</header>
	);
};

export default Header;
