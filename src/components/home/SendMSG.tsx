import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Buttons from '../designs/Buttons';
import { FieldValues } from 'react-hook-form';

const SendMSG = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		reset,
	} = useForm();
	const [messageSent, setMessageSent] = useState(false);

	const onSubmit = (data: FieldValues) => {
		return new Promise<void>((resolve, reject) => {
			if (
				!errors.name &&
				!errors.email &&
				!errors.message &&
				data.message.length <= 200
			) {
				console.log(data);
				reset(); // Clear all fields and form errors
				resolve();
				setTimeout(() => {
					setMessageSent(false);
				}, 3000);
			} else {
				console.error('Could not send message');
				reject();
			}
		})
			.then(() => {
				setMessageSent(true);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className='flex flex-col justify-center items-center md:mt-10'>
			<form
				className='md:px-10 px-12 pt-5 pb-10 bg-secondary rounded shadow-md dark:bg-secondary md:grid md:grid-cols-2 gap-5'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className=' h-5 col-span-2 text-center'>
					{messageSent && <p className='text-green-500'>Message sent!</p>}
				</div>

				<div className='relative mb-7'>
					<label
						htmlFor='inputName'
						className='block mb-2 text-sm text-light dark:text-light'
					>
						Your Name
					</label>
					<input
						id='inputName'
						className='w-full px-3 py-2 text-sm leading-tight text-dark border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
						type='text'
						{...register('name', { required: true, maxLength: 10 })}
					/>
					{errors.name?.type === 'required' && (
						<p className='text-delete text-xs italic absolute'>
							A value for the name field is required
						</p>
					)}
					{errors.name?.type === 'maxLength' && (
						<p className='text-delete text-xs italic absolute'>
							The name field must be less than 10 characters long
						</p>
					)}
				</div>

				<div className='mb-7'>
					<label
						htmlFor='inputEmail'
						className='block mb-2 text-sm text-light dark:text-light'
					>
						Email
					</label>
					<input
						id='inputEmail'
						className='w-full px-3 py-2 text-sm leading-tight text-dark border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
						type='text'
						{...register('email', {
							required: true,
							pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
						})}
					/>
					{errors.email?.type === 'required' && (
						<p className='text-delete text-xs italic'>
							A value for the email field is required
						</p>
					)}
					{errors.email?.type === 'pattern' && (
						<p className='text-delete text-xs italic'>
							The email format is incorrect
						</p>
					)}
				</div>

				<div className='mb-5 col-span-2'>
					<label
						htmlFor='inputMessage'
						className='block mb-2 text-sm text-light dark:text-light'
					>
						Message
					</label>
					<textarea
						id='inputMessage'
						className='w-full max-h-32 px-3 py-2 text-sm leading-tight text-dark border rounded shadow appearance-none focus:outline-none focus:shadow-outline h-32 resize-y'
						{...register('message', { required: true })}
						onChange={(e) => {
							const value = e.target.value;
							setValue(
								'message',
								value.length > 200 ? value.slice(0, 200) : value,
							);
						}}
					/>
					{errors.message && errors.message.type === 'required' && (
						<p className='text-delete text-xs italic'>
							A value for the new field is required
						</p>
					)}
				</div>
				<div className=' text-center col-span-2'>
					<Buttons
						buttonName='Send'
						typeSubmit={'submit'}
						bgPrimary='bg-primary px-10'
						bgHover='bg-fall'
						paddingX=''
					/>
				</div>
			</form>
		</div>
	);
};
export default SendMSG;
