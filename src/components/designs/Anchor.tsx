interface AnchorPros {
	hRef: string;
	anchorName: string;
}

const Anchor = (props: AnchorPros) => {
	const { hRef, anchorName } = props;

	return (
		<a
			href={hRef}
			className=' hidden sm:block  bg-fall hover:bg-tangerine m-2 text-light py-2 px-4 rounded-xl transition duration-400 ease-in-out transform hover:scale-105 active:scale-95'
		>
			{anchorName}
		</a>
	);
};

export default Anchor;
