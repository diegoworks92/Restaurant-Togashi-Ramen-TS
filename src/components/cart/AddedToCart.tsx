import { FaCartShopping } from 'react-icons/fa6';
import { ShowProps } from '.././sidebar/Contact';

const AddedToCart = ({ show }: ShowProps) => {
	return show ? (
		<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-light py-2 px-4 rounded flex items-center'>
			<span className='mr-2'>Added to cart</span> <FaCartShopping />
		</div>
	) : null;
};

export default AddedToCart;
