import { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Maps from '../home/Maps';
import SendMSG from '../home/SendMSG';
import Buttons from '../designs/Buttons';

export interface ShowProps {
	show: boolean;
	setShow?: () => void;
}

export function Contact() {
	const [show, setShow] = useState(true);

	function showForm() {
		setShow(!show);
	}

	const days = [
		{ id: 1, day: 'Monday', hours: '12:30 – 16:30 | 19:00 – 23:00' },
		{ id: 2, day: 'Tuesday', hours: '12:30 – 16:30 | 19:00 – 23:00' },
		{ id: 3, day: 'Wednesday', hours: '12:30 – 16:30 | 19:00 – 23:00' },
		{ id: 4, day: 'Thursday', hours: '12:30 – 16:30 | 19:00 – 23:00' },
		{ id: 5, day: 'Friday', hours: '12:00 – 16:30 | 19:00 – 23:30' },
		{ id: 6, day: 'Saturday', hours: '12:00 – 16:30 | 19:00 – 23:30' },
		{ id: 7, day: 'Sunday', hours: '12:00 – 16:30 | 19:00 – 23:30' },
	];

	return (
		<div
			id='contact'
			className='relative flex flex-col md:grid md:grid-cols-2 2xl:mb-10 bg-darkPrimary bg-opacity-95 dark:bg-dark text-light dark:text-light h-full rounded-xl pt-1 pb-1 mt-1 mb-1'
		>
			<div className='order-1 md:order-none m-18 mb-6 flex items-center flex-col'>
				<h2 className='flex justify-center font-PermanentMarker text-2xl m-6'>
					CONTACT
				</h2>
				<div className='mx-4'>
					<p>Calle Togashi 23</p>
					<p>08002 Barcelona</p>
					<p>+34 73 780 75 73</p>
					<p>togashi_ramen@mail.com (not for reservations)</p>
					<p>Reservations are only for groups of 4+</p>
					<p>Give us a call to make a group reservation:</p>
					<a>+34 73 780 75 73</a>
				</div>

				<Buttons
					buttonName='Send Message'
					bgPrimary='bg-fall dark:bg-darkSecondary'
					bgHover='bg-tangerine dark:hover:bg-fall'
					paddingX='4'
					onclick={showForm}
				/>
			</div>

			<div className='order-3 md:order-none m-18'>
				<h2 className='flex justify-center font-PermanentMarker text-2xl m-4 2xl:m-6'>
					HOURS
				</h2>
				<table className='flex justify-center'>
					<tbody>
						<tr>
							<th>Days</th>
							<th>Hours</th>
						</tr>
						{days.map((day) => {
							return (
								<tr key={day.id}>
									<td>{day.day}</td>
									<td>{day.hours}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div
				className={`order-2 md:order-none col-span-2 flex justify-center ${
					show ? 'hidden' : ''
				}`}
			>
				<SendMSG />
			</div>

			<div className='order-4 md:order-none col-span-2 flex justify-center'>
				<Maps />
			</div>

			<div className='order-5 2xl:order-none col-span-2 mt-24 md:mt-20 mb-3 2xl:mb-7'>
				<h2 className=' flex justify-center font-PermanentMarker  text-2xl m-3 2xl:m-6'>
					SOCIALS
				</h2>
				<div className='flex justify-center space-x-4 text-2xl '>
					<a
						href='#'
						className='text-fall hover:text-tangerine dark:text-darkSecondary dark:hover:text-fall'
					>
						<FaInstagram />
					</a>
					<a
						href='#'
						className='text-fall hover:text-tangerine dark:text-darkSecondary dark:hover:text-fall'
					>
						<FaFacebook />
					</a>
					<a
						href='#'
						className='text-fall hover:text-tangerine dark:text-darkSecondary dark:hover:text-fall'
					>
						<FaSquareXTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
