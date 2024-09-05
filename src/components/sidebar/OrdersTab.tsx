import Orders from '../Orders';
import AccountTotal from '../cart/AccountTotal';
import WhereToEat from '../WhereToEat';
import NumberOrder from '../NumberOrder';
import AddComment from '../cart/AddComment';
import { useState } from 'react';
import PurchaseConfirmation from '../PurchaseConfirmation';

const OrdersTab = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			{/* Orders */}
			<div
				id='orders'
				className='hidden 2xl:flex bg-darkPrimary bg-opacity-95 dark:bg-dark relative pb-10 pt-16 2xl:pt-1 text-light dark:text-light p-8 h-full w-full flex-col rounded-xl'
			>
				<NumberOrder />

				<Orders
					explanation='hidden'
					trash=''
					trash2='hidden'
					pFour='p-4'
					disguise=''
				/>
				<WhereToEat buttonsClass='flex justify-center flex-wrap gap-10 mb-6' />

				<AddComment enableComments='mt-6' />

				{/* Submit payment */}
				<div className='flex justify-center flex-col'>
					<AccountTotal
						cuantity='Cuantity'
						discount='Discount'
						discountValue={0}
						payment='Payment'
						mainClass='flex items-center justify-between mb-4'
						totalPayment='Total'
						textDark='text-light'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						toggleOpen={toggleOpen}
						paymentButton='hidden'
					/>

					<PurchaseConfirmation />
				</div>
			</div>
		</>
	);
};

export default OrdersTab;
