import { useOrdersStore, useCartStore } from '../../store/store';
import { Link, useLocation } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import OrderEat from './whereToEat/OrderEat';
import Buttons from '.././designs/Buttons';
import AddComment from './AddComment';
import PurchaseConfirmation from '../PurchaseConfirmation';
import WhereToEat from '../WhereToEat';
import useWindowWidth from '../../hooks/useWindowWidth';
interface AccountTotalProps {
	cuantity: string;
	payment: string;
	mainClass: string;
	textDark: string;
	lineWhite?: string;
	toggleOpen: () => void;
	isOpen: boolean;
	details?: string;
	isOpenAc?: React.ReactNode;
	paymentButton?: string;
	discount: string;
	discountValue: number;
	totalPayment: string;
	setIsOpen: (value: boolean) => void;
	total?: number;
	setTotal?: (value: number) => void;
	twoXlHidden?: string;
}

export interface NumberWithDecimalProps {
	numberWithDecimal: number;
}

const AccountTotal = (props: AccountTotalProps) => {
	const {
		cuantity,
		payment,
		mainClass,
		textDark,
		lineWhite,
		toggleOpen,
		isOpen,
		details,
		isOpenAc,
		paymentButton,
	} = props;

	const windowWidth = useWindowWidth();

	const { setIsOrdersActive } = useOrdersStore();

	const { setAllProducts, total, setTotal, countProducts, setCountProducts } =
		useCartStore();

	const numberWithDecimal = total.toFixed(2);

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const location = useLocation();
	const currentPath = location.pathname;

	const orderClick = () => {
		setIsOrdersActive(true);

		setTimeout(() => {
			const contactoElement = document.getElementById('orders');
			if (contactoElement) {
				// Check if the element exists before trying to access it
				contactoElement.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};

	return (
		<div className={`${textDark} dark:text-light mt-0`}>
			<div className={`${lineWhite}`}></div>
			<div className='flex justify-center'>
				<button onClick={toggleOpen}>
					<div className='flex justify-center'>
						<span className='text-lg'>{isOpenAc} </span>
					</div>
					<span>{details}</span>
				</button>
			</div>

			{isOpen && (
				<div className='px-6 pt-6'>
					<WhereToEat buttonsClass='flex items-center justify-between sm:justify-around 2xl:hidden gap-1 sm:gap-4 flex-wrap mb-6' />
					<AddComment enableComments='2xl:hidden mb-3' />
					<div className={`${countProducts === 0 ? 'hidden' : mainClass} mb-2`}>
						<span>To empty cart</span>
						<button>
							<RiDeleteBin6Line
								onClick={onCleanCart}
								className='w-9 h-9 p-2 ml-3 md:ml-0 text-delete  border border-delete rounded-full'
							/>
						</button>
					</div>

					<div className={`flex items-center justify-between mb-4`}>
						<span>{cuantity}</span>
						<span>{countProducts}</span>
					</div>

					<OrderEat numberWithDecimal={parseFloat(numberWithDecimal)} />
				</div>
			)}

			<div className={`flex justify-center mb-4 ${paymentButton}`}>
				<Link
					to={
						currentPath !== '/orders'
							? windowWidth >= 1024
								? 'orders'
								: ''
							: '#'
					}
				>
					<Buttons
						buttonName={payment}
						bgPrimary='bg-fall dark:bg-fall hidden 2xl:block'
						bgHover='bg-tangerine hover:dark:bg-tangerine'
						paddingX='4 mb-0 sm:-mb-2 md:mb-0'
						onclick={orderClick}
						typeSubmit=''
					/>
					<div className='2xl:hidden'>
						<PurchaseConfirmation />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AccountTotal;
