import { useState } from 'react';
import { useOrdersStore } from '../store/store';
import { RiCloseLine } from 'react-icons/ri';
import { useUserStore } from '../store/store';
const NumberOrder = () => {
	const { setShowOrder } = useOrdersStore();
	// Checks if a random number already exists in the session storage

	// Estado para la fecha actual
	const [date] = useState(new Date());
	// Variables y funciones del store de usuario
	const { name } = useUserStore();

	let randomNumber = sessionStorage.getItem('randomNumber');

	// If it does not exist, generate a new one and save it
	if (!randomNumber) {
		randomNumber = (Math.floor(Math.random() * (210 - 23 + 1)) + 23).toString(); // Convert the number to a string
		sessionStorage.setItem('randomNumber', randomNumber);
	}

	return (
		<>
			<RiCloseLine
				onClick={() => setShowOrder(false)}
				className='2xl:hidden absolute right-4 top-15 p-3 box-content bg-seaGreen dark:bg-secondary rounded-full text-xl'
			/>
			<div className='flex justify-between'>
				<h1 className='text-2xl mt-4 text-light'>{`Order #${randomNumber}`}</h1>
				<p className='text-2xl mt-4 mr-10 2xl:mr-0 text-light dark:text-light  '>
					{/* Fecha actual si hay un nombre de usuario */}
					{name.trim() === '' ? '' : `${date.toLocaleDateString()}`}
				</p>
			</div>
		</>
	);
};

export default NumberOrder;
