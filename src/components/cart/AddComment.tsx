import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import Buttons from '.././designs/Buttons';

interface EnableComments {
	enableComments: string;
}

const AddComment = ({ enableComments }: EnableComments) => {
	const [comment, setComment] = useState('');
	const [savedComment, setSavedComment] = useState<string | null>(null);

	const handleCommentChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const value = event.target.value;
		// Limit the comment to 200 characters
		if (value.length <= 200) {
			setComment(value);
		}
	};

	const handleAddOrModifyComment = () => {
		setSavedComment(comment);
		setComment('');
	};

	const removeComment = () => {
		setComment('');
		setSavedComment(null);
	};
	return (
		<div className='flex justify-center'>
			<div
				className={` ${enableComments} w-3/4 flex flex-col justify-center items-center`}
			>
				<textarea
					className='w-full px-3 py-2 text-sm leading-tight text-dark border rounded shadow appearance-none focus:outline-none focus:shadow-outline max-h-40'
					value={comment}
					onChange={handleCommentChange}
					placeholder='Add observations...'
				/>
				<div className='flex 2xl:justify-end 2xl:w-full'>
					<Buttons
						onclick={handleAddOrModifyComment}
						buttonName={
							savedComment ? 'Modify observations' : 'Add observations'
						}
						bgPrimary='bg-fall hover:bg-tangerine 2xl:mx-0'
						typeSubmit={'submit'}
						paddingX='3'
					/>
				</div>

				{savedComment && (
					<div className='text-light mt-2 p-2 border rounded w-full h-auto overflow-y-auto relative'>
						<span>Observations: {savedComment}</span>
						<RiCloseLine
							className='bg-delete text-light absolute right-2 top-2 text-xl rounded-full'
							onClick={removeComment}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default AddComment;
