import { useState, useEffect } from 'react';
import { NumberWithDecimalProps } from '../AccountTotal';

const Collection = ({ numberWithDecimal }: NumberWithDecimalProps) => {
	const [discount, setDiscount] = useState(0);
	const [discountRate, setDiscountRate] = useState(0);

	const calculateDiscount = (price: number) => {
		if (price >= 50) {
			setDiscountRate(6);
			return price * 0.06;
		} else if (price >= 40) {
			setDiscountRate(4);
			return price * 0.04;
		} else if (price >= 30) {
			setDiscountRate(2);
			return price * 0.02;
		} else {
			setDiscountRate(0);
			return 0;
		}
	};

	useEffect(() => {
		const newDiscount = calculateDiscount(numberWithDecimal);
		setDiscount(parseFloat(newDiscount.toFixed(2)));
	}, [numberWithDecimal]);

	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<span>Subtotal</span>
				<span>{numberWithDecimal}€</span>
			</div>

			<div className='flex items-center justify-between mb-4'>
				<p>Discount:</p>
				<p>
					{discount.toFixed(2)}€ ({discountRate}%)
				</p>
			</div>
			<div className='flex items-center justify-between mb-4'>
				<p>Final price:</p>
				<p>{(numberWithDecimal - discount).toFixed(2)}€</p>
			</div>
		</>
	);
};

export default Collection;
