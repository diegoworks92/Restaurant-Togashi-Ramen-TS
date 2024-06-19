import { useMenuStore } from '../../../store/store';
import Collection from './Collection';
import Delivery from './Delivery';
import DineHere from './DineHere';

import { NumberWithDecimalProps } from '../AccountTotal';

const OrderEat = ({ numberWithDecimal }: NumberWithDecimalProps) => {
	const { whereToEat } = useMenuStore();
	let collection = <DineHere numberWithDecimal={numberWithDecimal} />;

	if (whereToEat === 1) {
		collection = <DineHere numberWithDecimal={numberWithDecimal} />;
	}
	if (whereToEat === 2) {
		collection = <Collection numberWithDecimal={numberWithDecimal} />;
	}
	if (whereToEat === 3) {
		collection = <Delivery numberWithDecimal={numberWithDecimal} />;
	}

	return <div>{collection}</div>;
};

export default OrderEat;
