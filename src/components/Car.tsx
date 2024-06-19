import { useState } from 'react';
import { useCartStore, useOrdersStore } from '../store/store';
import Orders from './Orders';
import AccountTotal from '../components/cart/AccountTotal';
import WhereToEat from './WhereToEat';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import NumberOrder from './NumberOrder';

const Car = () => {
	const showOrder = useOrdersStore((state) => state.showOrder);

	const { total, setTotal } = useCartStore();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div
			className={`2xl:col-span-2 fixed top-0 bg-secondary bg-opacity-95 dark:bg-dark w-full 2xl:w-96 2xl:right-0 h-full transition-all z-40 ${
				showOrder ? 'right-0' : '-right-full'
			}`}
		>
			{/* Orders */}
			<div className='relative pb-10 pt-3 2xl:pt-1 text-light p-8 h-full flex flex-col'>
				{' '}
				<NumberOrder />
				<WhereToEat buttonsClass='hidden items-center justify-between 2xl:flex gap-1 sm:gap-4 flex-wrap mb-4 mt-4' />
				<Orders
					descriptions='hidden'
					disguise='hidden'
					trash='hidden'
					trash2=''
					pFour=''
				/>
				{/* Submit payment */}
				<div className='absolute bg-secondary dark:bg-secondary w-full bottom-0 left-0 mt-auto'>
					<AccountTotal
						total={total}
						setTotal={setTotal}
						cuantity='Cuantity'
						discount='Discount'
						discountValue={0}
						payment='Continue to payment'
						mainClass='flex items-center justify-between mb-4'
						twoXlHidden='2xl:hidden'
						totalPayment='Total'
						textDark='text-light'
						lineWhite='border dark:border-light w-full'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						toggleOpen={toggleOpen}
						details='Show Details'
						isOpenAc={isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
					/>
				</div>
			</div>
		</div>
	);
};

export default Car;
