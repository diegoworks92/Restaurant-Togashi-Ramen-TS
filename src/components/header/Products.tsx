import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/store';
import { ramen, dishes, drinks } from '../../components/dishData';
import {
	RiArrowDownSLine,
	RiSearch2Line,
	RiArrowUpSLine,
	RiBeerFill,
} from 'react-icons/ri';
import { PiPlantFill } from 'react-icons/pi';
import { FaLeaf } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';
import AddedToCart from '../cart/AddedToCart';

interface ProductsProps {
	title: string;
	typeProduct: string;
	wi: string;
	hei: string;
	roun: string;
	kindFood: string;
	alcohol: string;
}

const Products = ({
	title,
	typeProduct,
	wi,
	hei,
	roun,
	kindFood,
	alcohol,
}: ProductsProps) => {
	const {
		total,
		setTotal,
		allProducts,
		setAllProducts,
		countProducts,
		setCountProducts,
		selectedPlates,
		setSelectedPlates,
	} = useCartStore();

	const [productAdded, setProductAdded] = useState(false);
	/* 
	const onAddProduct = (product: Product) => {
		setProductAdded(true);

		if (
			allProducts.find((item) => item.id === `${product.type}-${product.id}`)
		) {
			const products = allProducts.map((item: Product) =>
				item.id === `${product.type}-${product.id}`
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);

			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([
			...allProducts,
			{ ...product, id: `${product.type}-${product.id}` },
		]);
	};
 */

	const onAddProduct = (product: Product) => {
		// Busca el producto en el carrito
		const existingProduct = allProducts.find((item) => item.id === product.id);

		if (existingProduct) {
			// Si el producto ya está en el carrito, incrementa su cantidad
			existingProduct.quantity += 1;
		} else {
			// Si el producto no está en el carrito, añádelo
			setAllProducts([...allProducts, { ...product, quantity: 1 }]);
		}

		// Actualiza el total y la cantidad de productos
		setTotal(total + product.price);
		setCountProducts(countProducts + 1);
	};

	/* 
	const addProductToSelectedPlates = (product: Product) => {
		setSelectedPlates((prevSelectedPlates: Product[]) => [
			...prevSelectedPlates,
			product,
		]);
	};
 */
	/* 	const onAddProduct = (product: Product) => {
		setProductAdded(true);

		if (
			allProducts.find((item) => item.id === `${product.type}-${product.id}`)
		) {
			const products = allProducts.map((item: Product) =>
				item.id === `${product.type}-${product.id}`
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);

			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			setAllProducts([...products]);
			setSelectedPlates((prevSelectedPlates) => [
				...prevSelectedPlates,
				product,
			]);
		} else {
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			setAllProducts([
				...allProducts,
				{ ...product, id: `${product.type}-${product.id}` },
			]);
			setSelectedPlates((prevSelectedPlates) => [
				...prevSelectedPlates,
				product,
			]);
		}
	}; */

	useEffect(() => {
		if (productAdded) {
			const timer = setTimeout(() => {
				setProductAdded(false);
			}, 500); // The message will disappear after 2 seconds

			return () => clearTimeout(timer); // Clean the timer if the component is disassembled
		}
	}, [productAdded]);

	/* Search */
	const [search, setSearch] = useState('');
	let filteredItems: Product[] = [];

	if (typeProduct === 'dishes') {
		filteredItems = dishes.filter((dish) =>
			dish.name.toLowerCase().includes(search.toLowerCase()),
		);
	} else if (typeProduct === 'ramen') {
		filteredItems = ramen.filter((ram) =>
			ram.name.toLowerCase().includes(search.toLowerCase()),
		);
	} else if (typeProduct === 'drinks') {
		filteredItems = drinks.filter((drink) =>
			drink.name.toLowerCase().includes(search.toLowerCase()),
		);
	}

	// Add a new state for the sort order
	const [sortOrder, setSortOrder] = useState('none');

	// Sort the dishes based on the status of sortOrder
	const sortedItems = [...filteredItems].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.price - b.price;
		} else if (sortOrder === 'desc') {
			return b.price - a.price;
		} else {
			return 0;
		}
	});

	const [sort, setSort] = useState(false);
	const trueOrder = () => {
		setSort(!sort);
	};

	/* 	const [explanationId, setExplanationId] = useState<number | null>(null); */
	const [explanationId, setExplanationId] = useState<string | null>(null);

	/* 	const toggleExplanation = (id: string) => {
        setExplanationId(explanationId === id ? null : id);
    }; */

	/* 	const toggleExplanation = (id: string) => {
		const numId = Number(id); // Convierte id a un número
		setExplanationId(explanationId === numId ? null : numId);
	};
 */

	const toggleExplanation = (id: string) => {
		setExplanationId(explanationId === id ? null : id);
	};

	// Persistir el estado del carrito actualizado en el almacenamiento local
	useEffect(() => {
		// Convertir el estado del carrito a cadena JSON
		const cartState = JSON.stringify({
			allProducts: allProducts,
			total: total,
			countProducts: countProducts,
			selectedPlates: selectedPlates, // Añade selectedPlates aquí
		});

		// Guardar el estado del carrito en el almacenamiento local
		localStorage.setItem('cartState', cartState);
	}, [allProducts, total, countProducts, selectedPlates]); // Añade selectedPlates a las dependencias del efecto

	useEffect(() => {
		// Recuperar el estado del carrito del almacenamiento local
		const storedCartState = localStorage.getItem('cartState');

		if (storedCartState) {
			// Convertir la cadena JSON a un objeto JavaScript
			const cartState = JSON.parse(storedCartState);

			// Establecer el estado de la aplicación con los valores recuperados
			setAllProducts(cartState.allProducts);
			setTotal(cartState.total);
			setCountProducts(cartState.countProducts);
			if (typeof setSelectedPlates === 'function') {
				// Verificar si setSelectedPlates es una función
				setSelectedPlates(cartState.selectedPlates);
			}
		}
	}, []);

	return (
		<div className='bg-secondary bg-opacity-95 dark:bg-transparent rounded-xl pt-6'>
			<div className='flex justify-center'>
				<h2 className='order-1 2xl:order-none text-2xl text-light dark:text-light -mt-5'>
					{title}
				</h2>
			</div>
			<div className='flex justify-between mx-4 dark:mx-0 dark:justify-between flex-col md:flex-row text-center pb-4'>
				<div
					className={`flex order-2 md:order-none md:items-center pt-3 md:pt-0 justify-center dark:text-light ${kindFood}`}
				>
					<span className='mx-2 text-xl -mt-1 text-delete'>
						<GiChiliPepper />
					</span>
					<span className='text-light dark:text-light'>Spicy.</span>
					<span className='mx-2 text-xl -mt-1  text-vegetarian'>
						<FaLeaf />
					</span>
					<span className='text-light dark:text-light'>Vegetarian.</span>
					<span className='mx-2 text-xl -mt-1  text-vegan'>
						<PiPlantFill />
					</span>
					<span className='text-light dark:text-light'>Vegan.</span>
				</div>

				<div
					className={`flex order-2 md:order-none md:items-center pt-3 md:pt-0 justify-center text-light dark:text-light ${alcohol}`}
				>
					<span className='mx-2 text-xl -mt-1 text-delete'>
						<RiBeerFill />
					</span>
					<span>Alcohol</span>
				</div>

				<p className='order-3 2xl:order-none text-light dark:text-light pt-1'>
					Click on the product to learn more.
				</p>
			</div>
			{/* Search */}
			<div className='flex flex-col sm:flex-row  sm:justify-between gap-4 mx-12 sm:mx-20 dark:mx-0 mb-8'>
				<form>
					<div className='w-full relative'>
						<RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-light' />
						<input
							type='text'
							value={search}
							placeholder='Search'
							onChange={(e) => setSearch(e.target.value)}
							className='bg-secondary dark:bg-dark py-2 pl-10  rounded-2xl text-light outline-none placeholder-light min-w-full lg:min-w-min'
						/>
					</div>
				</form>

				{/* Title content */}

				{/* Add an accordion to change the sort order */}
				<details>
					<summary
						className={`flex items-center gap-4 text-light bg-secondary dark:bg-dark py-2 px-4 min-w-full ${
							sort ? 'rounded-t-2xl' : 'rounded-2xl'
						}`}
						onClick={trueOrder}
					>
						{' '}
						{sort ? <RiArrowUpSLine /> : <RiArrowDownSLine />}Sort by
					</summary>
					<div className='flex flex-col text-dark'>
						<button
							onClick={() => setSortOrder('asc')}
							className='border border-dark bg-concrete dark:bg-light '
						>
							Price (Low to High)
						</button>
						<button
							onClick={() => setSortOrder('desc')}
							className='border border-dark rounded-b-lg bg-concrete dark:bg-light '
						>
							Price (High to Low)
						</button>
					</div>
				</details>
			</div>

			<div className='p-8 flex flex-wrap justify-center'>
				{sortedItems.length > 0 ? (
					sortedItems.map((product) => (
						<div
							key={product.id}
							className='item bg-secondary dark:bg-dark p-8 rounded-xl flex flex-col items-center gap-2 text-center text-light m-4 mt-12 w-full sm:w-1/3 lg:w-1/4 min-w-[240px] relative justify-between'
						>
							<img
								src={product.img}
								className={`${wi} ${hei} object-cover -mt-20 shadow-2xl ${roun} cursor-pointer`}
								onClick={() => toggleExplanation(product.id.toString())} // Añade un manejador de clics a la imagen
							/>
							<p
								className={`text-xl flex gap-2 hover:text-primary cursor-pointer ${
									explanationId === product.id.toString() ? 'text-primary' : ''
								}`}
								onClick={() => toggleExplanation(product.id.toString())} // Añade un manejador de clics al nombre
							>
								{product.name}
							</p>
							{/* 			{Number(explanationId) === product.id && (
								<span
									onClick={() => toggleExplanation(product.id.toString())}
									className='absolute top-0 left-0 text-secondary bg-white rounded-xl z-10'
								>
									{product.description}
								</span>
							)} */}
							{explanationId === product.id.toString() && (
								<span
									onClick={() => toggleExplanation(product.id.toString())}
									className='absolute top-0 left-0 text-secondary bg-white rounded-xl z-10'
								>
									{product.description}
								</span>
							)}
							<div className='flex'>
								<p>
									{product.alcohol === true ? (
										<RiBeerFill className='text-3xl -mt-1 text-delete' />
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
							<span className='text-light'>{product.price}€</span>
							<button
								onClick={() => onAddProduct(product)}
								className=' bg-fall text-light py-2 px-7 rounded-xl  transition duration-400 ease-in-out transform hover:scale-105 active:scale-95 active:bg-tangerine dark:active:bg-tangerine'
							>
								Add
							</button>
							<AddedToCart show={productAdded} />
						</div>
					))
				) : (
					<div className='item flex flex-col items-center gap-2 text-center w-96 text-dark bg-tangerine p-14 text-3xl rounded-2xl m-4 '>
						<p className=' '>{`No results found for "${search}"`}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
