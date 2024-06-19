import { useState, useEffect } from 'react';
import { NumberWithDecimalProps } from '../AccountTotal';

const Delivery = ({ numberWithDecimal }: NumberWithDecimalProps) => {
	const [delivery, setDelivery] = useState(0);
	const [finalPrice, setFinalPrice] = useState(
		Number(numberWithDecimal) + Number(delivery),
	);

	useEffect(() => {
		if (numberWithDecimal >= 50) {
			setDelivery(0);
		} else {
			setDelivery(3.5);
		}
	}, [numberWithDecimal]);

	useEffect(() => {
		setFinalPrice(Number(numberWithDecimal) + Number(delivery));
	}, [numberWithDecimal, delivery]);

	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<span>Subtotal</span>
				<span>{numberWithDecimal}€</span>
			</div>
			<div className='flex items-center justify-between mb-4'>
				<p>Delivery:</p>
				<p>{delivery}€</p>
			</div>
			<div className='flex items-center justify-between mb-4'>
				<p>Final price:</p>
				<p>{finalPrice.toFixed(2)}€</p>
			</div>
		</>
	);
};

export default Delivery;
