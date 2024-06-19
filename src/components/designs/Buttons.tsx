interface ButtonProps {
	buttonName: string;
	bgPrimary: string;
	bgHover?: string;
	typeSubmit?: string;
	paddingX: string;
	onclick?: () => void;
}

const Buttons = (props: ButtonProps) => {
	const { buttonName, bgPrimary, bgHover, typeSubmit, paddingX, onclick } =
		props;

	return (
		<button
			onClick={onclick}
			className={`${bgPrimary} type=${typeSubmit} hover:${bgHover} px-${paddingX} m-4 text-light py-2  rounded-xl transition duration-400 ease-in-out transform hover:scale-105 active:scale-95`}
		>
			{buttonName}
		</button>
	);
};

export default Buttons;
