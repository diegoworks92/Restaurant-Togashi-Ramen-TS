import { useState } from 'react';
import {
	RiDeleteBin6Line,
	RiBeerFill,
	RiArrowDownSLine,
	RiArrowUpSLine,
} from 'react-icons/ri';
import { PiPlantFill } from 'react-icons/pi';
import { FaLeaf } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';
import { useCartStore } from '../store/store';

interface OrdersProps {
	descriptions?: string;
	disguise: string;
	explanation?: string;
	trash: string;
	trash2: string;
	pFour: string;
}

const Orders = (props: OrdersProps) => {
	const { descriptions, disguise, explanation, trash, trash2, pFour } = props;

	const {
		allProducts,
		setAllProducts,
		countProducts,
		setCountProducts,
		total,
		setTotal,
		selectedPlates,
		setSelectedPlates,
	} = useCartStore();

	const onDeleteProduct = (product: Product) => {
		const results = allProducts.filter((item) => item.id !== product.id);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);

		const newSelectedPlates = selectedPlates.filter(
			(item) => item.id !== product.id,
		);
		setSelectedPlates(newSelectedPlates);
	};

	const [explanationId, setExplanationId] = useState<string | null>(null);

	const toggleExplanation = (id: string) => {
		setExplanationId(explanationId === id ? null : id);
	};

	return (
		<div className='overflow-y-scroll mb-20 2xl:mb-10'>
			<div className='flex justify-between mb-2 mt-2 p-4 text-light dark:text-light'>
				<h5 className=''>Item</h5>

				<div className='flex items-center ml-auto'>
					<h5 className=''>Qty</h5>
				</div>

				<div className='flex items-center ml-9'>
					<h5>Price</h5>
				</div>
			</div>
			{allProducts.map((product) => (
				<div key={product.id}>
					<div
						className={`bg-secondary border border-light dark:border-light dark:bg-secondary p-4 ${pFour} rounded-xl mb-4`}
					>
						<div className='grid grid-cols-6 mb-4'>
							{/* Product description */}
							<div className='col-span-6 flex items-center gap-4 '>
								<img
									src={product.img}
									className={` ${
										product.type === 'drinks' ? 'w-50 h-10' : 'w-10 h-10'
									} object-cover`}
								></img>
								<div>
									<h5 className='text-md text-light dark:text-light'>
										{product.name}
									</h5>
								</div>

								<div className={`flex ${disguise}`}>
									<p>
										{product.alcohol === true ? (
											<RiBeerFill
												className={`text-3xl mx-2 -mt-1 text-delete`}
											/>
										) : (
											''
										)}
									</p>
									<p>
										{product.spicy === true ? (
											<GiChiliPepper className='mx-2 text-3xl -mt-1 text-delete' />
										) : (
											''
										)}
									</p>
									<p>
										{product.vegetarian === true ? (
											<FaLeaf className='mx-2 text-3xl -mt-1  text-vegetarian' />
										) : (
											''
										)}
									</p>
									<p>
										{product.vegan === true ? (
											<PiPlantFill className='mx-2 text-3xl -mt-1  text-vegan' />
										) : (
											''
										)}
									</p>
								</div>

								<div className='flex items-center ml-auto'>
									<span className='text-light dark:text-light'>
										{product.quantity}
									</span>
								</div>

								<div className='flex items-center ml-3'>
									<span className='text-light dark:text-light'>
										{product.price}€
									</span>
								</div>
							</div>
						</div>
						{/* Note */}
						<div className='grid grid-cols-6 items-center'>
							{/* //////////////// */}

							<div
								className={`${descriptions} col-span-5 border border-light dark:border-light rounded-xl`}
							>
								<p className='m-1'>{product.description}</p>
							</div>
							<button>
								<RiDeleteBin6Line
									onClick={() => onDeleteProduct(product)}
									className={`${trash} w-9 h-9 p-2 ml-3 md:ml-16 text-delete  border border-delete rounded-full`}
								/>
							</button>
							<div className={`${explanation} col-span-6 flex justify-around`}>
								<div className={`flex justify-center flex-col items-center `}>
									<button
										className={`text-sm cursor-pointer flex ${
											explanationId === product.id
												? 'text-fall dark:text-primary'
												: 'text-light dark:text-light'
										} hover:text-fall dark:hover:text-primary`}
										onClick={() => toggleExplanation(product.id)}
									>
										<span>Description</span>
										{explanationId === product.id ? (
											<RiArrowUpSLine className='mt-1' />
										) : (
											<RiArrowDownSLine className='mt-1' />
										)}
									</button>
								</div>

								<button>
									<RiDeleteBin6Line
										onClick={() => onDeleteProduct(product)}
										className={`${trash2} w-9 h-9 p-2 text-delete border border-delete rounded-full`}
									/>
								</button>
							</div>
							{explanationId === product.id && (
								<p
									className='mt-2 mb-2 p-1 2xl:w-72 col-span-5 border border-light dark:border-light rounded-xl'
									onClick={() => toggleExplanation(product.id)}
								>
									{product.description}
								</p>
							)}
						</div>
						{/* 		<button>
							<RiDeleteBin6Line
								onClick={() => onDeleteProduct(product)}
								className={`${trash} w-9 h-9 p-2 ml-3 md:ml-16 text-delete  border border-delete rounded-full`}
							/>
						</button> */}
					</div>
				</div>
			))}
			{allProducts.length === 0 && <p>No dishes are selected.</p>}
		</div>
	);
};

export default Orders;
