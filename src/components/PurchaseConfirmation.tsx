import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import Buttons from './designs/Buttons';

function PurchaseConfirmation() {
	const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false);

	const handlePurchase = () => {
		setPurchaseModalOpen(true);
	};

	return (
		<div className='flex justify-center whitespace-nowrap'>
			<Buttons
				buttonName='Make the purchase of the order'
				bgPrimary='bg-delete 2xl:w-1/3'
				bgHover='bg-tangerine hover:dark:bg-tangerine'
				paddingX='4'
				onclick={handlePurchase}
				typeSubmit=''
			/>
			{isPurchaseModalOpen && (
				<div className='fixed z-50 inset-0 overflow-y-auto'>
					<div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div
							className='fixed inset-0 transition-opacity w-full h-full'
							aria-hidden='true'
						>
							<div className='absolute inset-0 bg-gray-500 opacity-75'></div>
						</div>
						<span
							className='hidden sm:inline-block sm:align-middle sm:h-screen'
							aria-hidden='true'
						>
							​
						</span>
						<div className='inline-block align-bottom bg-light rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-light'>
							<div className='bg-primary text-dark dark:bg-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<button
										type='button'
										className='absolute top-0 right-0 m-2 text-light hover:text-fall text-3xl sm:px-1'
										onClick={() => setPurchaseModalOpen(false)}
									>
										<MdOutlineCancel />
									</button>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<h3
											className='text-2xl leading-6 font-semibold text-light mb-5'
											id='modal-title'
										>
											Purchased product
										</h3>
									</div>
								</div>
							</div>
							<div className='text-center bg-primary dark:bg-dark px-4 sm:px-6 sm:flex sm:flex-row-reverse'>
								<Buttons
									buttonName='Accept'
									bgPrimary='bg-fall dark:bg-fall'
									bgHover='bg-tangerine hover:dark:bg-tangerine'
									paddingX='4'
									onclick={() => setPurchaseModalOpen(false)}
									typeSubmit=''
								></Buttons>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PurchaseConfirmation;
