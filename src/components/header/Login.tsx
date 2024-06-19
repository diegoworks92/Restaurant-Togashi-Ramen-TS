import { useCartStore, useUserStore } from '../../store/store';
import { RiUser3Line } from 'react-icons/ri';

const Login: React.FC<UserNameType> = ({ setUserName }) => {
	const { setShowModal, setIsActive } = useUserStore();

	const { setCountProducts, setTotal, setAllProducts } = useCartStore();

	// handleExit
	const clickButton = () => {
		setUserName('');
		setShowModal(true);
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		setIsActive(true);
	};

	return (
		<div>
			<button
				onClick={clickButton}
				className='hidden md:block mr-2 w-9 h-9 p-[4px] dark:text-light text-light hover:text-fall hover:dark:text-primary border-2 bg-secondary dark:bg-transparent dark:border-light border-dark hover:border-fall hover:dark:border-primary rounded-full text-shadow dark:text-shadow-none'
			>
				<RiUser3Line />
				<span className='text-sm flex justify-center whitespace-nowrap mt-2 text-dark dark:text-light'>
					Sign in
				</span>
			</button>
		</div>
	);
};

export default Login;
