import { useMenuStore } from '../store/store';

interface ButtonProp {
	buttonsClass: string;
}

const WhereToEat = (props: ButtonProp) => {
	const { chooseButton, setChooseButton, setWhereToEat } = useMenuStore();

	const { buttonsClass } = props;

	const buttons = [
		{ id: 1, name: 'Dine Here' },
		{ id: 2, name: 'Collection' },
		{ id: 3, name: 'Delivery' },
	];

	const clickDine = (id: number) => {
		setChooseButton(id);

		if (id === 1) {
			setWhereToEat(1);
		}
		if (id === 2) {
			setWhereToEat(2);
		}
		if (id === 3) {
			setWhereToEat(3);
		}
	};

	return (
		<>
			{/* Pills */}
			<div className={buttonsClass}>
				{buttons.map((button) => (
					<button
						key={button.id}
						className={`py-2 sm:py-1 md:py-2 px-1 sm:px-2 rounded-xl flex flex-wrap justify-center ${
							chooseButton === button.id
								? 'bg-fall text-light dark:text-light'
								: 'text-fall dark:text-primary border border-light dark:border-light'
						}`}
						onClick={() => clickDine(button.id)}
					>
						{button.name}
					</button>
				))}
			</div>
		</>
	);
};

export default WhereToEat;
