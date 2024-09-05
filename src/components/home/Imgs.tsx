import { RiCloseLine } from 'react-icons/ri';
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from 'react-icons/io';

import { useState, useEffect } from 'react';

const Imgs = () => {
	const [selectedImg, setSelectedImg] = useState<(typeof imgs)[0] | null>(null);
	const [isShowing, setIsShowing] = useState(false);

	const handleClick = (img: (typeof imgs)[0]) => {
		setSelectedImg(img);
		setIsShowing(true);
	};

	const handleClose = () => {
		setIsShowing(false);
	};

	const handleKeyDown = (event: Event) => {
		const keyboardEvent = event as KeyboardEvent;
		if (isShowing && selectedImg) {
			if (keyboardEvent.key === 'Escape') {
				handleClose();
			} else if (keyboardEvent.key === 'ArrowRight') {
				setSelectedImg(imgs[selectedImg.id % imgs.length]);
			} else if (keyboardEvent.key === 'ArrowLeft') {
				setSelectedImg(imgs[(selectedImg.id - 2 + imgs.length) % imgs.length]);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isShowing, selectedImg]);

	return (
		<>
			<div
				id='gallery'
				className='relative bg-darkPrimary bg-opacity-95 dark:bg-dark p-2 2xl:p-8 2xl:mt-10 2xl:pt-0 text-light dark:text-light  h-full flex flex-col rounded-xl'
			>
				<h2 className='flex justify-center font-PermanentMarker mb-2 2xl:m-4 text-2xl'>
					GALLERY
				</h2>
				<div className='grid grid-cols-3 gap-2 2xl:gap-4'>
					{imgs.map((img) => (
						<div
							key={img.id}
							className={`${img.classDiv} h-[80px] sm:h-28 md:h-32 lg:h-44 xl:h-52 2xl:h-full`}
							onClick={() => handleClick(img)}
						>
							<img
								className={`${img.classImg} cursor-pointer`}
								src={img.src}
								alt={img.alt}
							/>
						</div>
					))}
				</div>
			</div>
			{isShowing && selectedImg && (
				<div className='fixed inset-0 bg-dark bg-opacity-80 flex items-center justify-center z-50 notranslate'>
					<div className='relative'>
						<button
							className='absolute top-0 right-0 m-2 text-light text-3xl opacity-50 hover:opacity-100'
							onClick={handleClose}
						>
							{' '}
							<RiCloseLine />{' '}
						</button>
						<img
							src={selectedImg.src}
							alt={selectedImg.alt}
							className='w-96 2xl:w-[1000px] h-60 2xl:h-[700px]'
						/>
						<p className='absolute top-0 left-0 m-2 text-light text-2xl'>
							{selectedImg.id}/{imgs.length}
						</p>
						<button
							className='absolute bottom-2/4 left-0 m-2 text-light text-5xl opacity-50 hover:opacity-100'
							onClick={() =>
								setSelectedImg(
									imgs[(selectedImg.id - 2 + imgs.length) % imgs.length],
								)
							}
						>
							{' '}
							<IoIosArrowDropleftCircle />{' '}
						</button>
						<button
							className='absolute bottom-2/4 right-0 m-2 text-light text-5xl opacity-50 hover:opacity-100'
							onClick={() => setSelectedImg(imgs[selectedImg.id % imgs.length])}
						>
							{' '}
							<IoIosArrowDroprightCircle />{' '}
						</button>
						<button
							className='absolute bottom-2/4 right-0 m-2 text-light text-5xl opacity-50 hover:opacity-100'
							onClick={() => setSelectedImg(imgs[selectedImg.id % imgs.length])}
						>
							{' '}
							<IoIosArrowDroprightCircle />{' '}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Imgs;

const imgs = [
	{
		id: 1,
		src: '../kitchen/img1.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 2,
		src: '../kitchen/img2.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 3,
		src: '../kitchen/img3.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 4,
		src: '../kitchen/img4.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 5,
		src: '../kitchen/img5.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 6,
		src: '../kitchen/img6.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 7,
		src: '../kitchen/img7.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 8,
		src: '../kitchen/img8.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
	{
		id: 9,
		src: '../kitchen/img9.webp',
		alt: 'asian restaurant',
		classDiv: 'w-full h-44 overflow-hidden',
		classImg:
			'w-full h-full object-cover transform transition-all duration-500 hover:scale-110',
	},
];
