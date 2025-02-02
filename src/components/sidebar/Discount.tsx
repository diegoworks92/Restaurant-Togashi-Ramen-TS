import { PiForkKnifeFill } from 'react-icons/pi';
import { MdDeliveryDining } from 'react-icons/md';
import { IoBagCheckSharp } from 'react-icons/io5';

function Discount() {
	return (
		<div
			id='discount'
			className='relative md:flex md:flex-col md:justify-center items-center md:w-full bg-darkPrimary bg-opacity-95 dark:bg-dark text-light dark:text-light h-full rounded-xl pt-1 pb-1 mt-1 mb-1'
		>
			<div className='m-18 mb-6 flex items-center md:w-1/2 flex-col mx-3 md:mx-0'>
				<div className='flex items-center'>
					<h2 className='flex justify-center font-PermanentMarker text-2xl m-6'>
						Dine Here
					</h2>
					<span className='text-2xl'>
						{' '}
						<PiForkKnifeFill />
					</span>
				</div>
				<div>
					<p>
						Do you already know what you feel like eating and can’t wait to
						taste it?
					</p>
					<p>
						We have the perfect solution for you! If you have already made a
						reservation to eat at our restaurant, you can get ahead and place
						your order through our website. We also offer the option of online
						payment so you can enjoy your meal without unnecessary delays.
					</p>
					<p>
						This way, you can reduce your waiting time and enjoy your meal as
						soon as you arrive!
					</p>
				</div>

				<div className='flex items-center'>
					<h2 className='flex justify-center font-PermanentMarker text-2xl m-6'>
						Collection
					</h2>
					<span className='text-2xl'>
						<IoBagCheckSharp />
					</span>
				</div>
				<div>
					<p>
						When you pick up your order, you will have different discounts
						depending on the value of your purchase! Please note that these
						discounts are not cumulative.
					</p>
					<ul className='list-disc mx-3'>
						<li>
							<p>
								For purchases over 30€, you will have a 2% discount on the total
								price.
							</p>
						</li>
						<li>
							<p>
								For purchases over 40€, you will have a 4% discount on the total
								price.
							</p>
						</li>
						<li>
							<p>
								For purchases over 50€, you will have a 6% discount on the total
								price
							</p>
						</li>
					</ul>
				</div>

				<div className='flex items-center'>
					<h2 className='flex justify-center font-PermanentMarker text-2xl m-6'>
						Delivery
					</h2>
					<span className='text-2xl pt-2'>
						<MdDeliveryDining />
					</span>
				</div>
				<div>
					<p>
						The delivery fee for each order is 3.50€. However, we offer free
						delivery for purchases exceeding 50€.
					</p>
					<p>The estimated delivery time ranges between 20 and 30 minutes. </p>
					<p>
						In the event that the delivery is delayed by more than 40 minutes,
						you will not be charged any delivery fee.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Discount;
