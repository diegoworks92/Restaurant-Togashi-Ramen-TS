import { useEffect } from 'react';
import { useUserStore, useMenuStore } from '../../store/store';

interface UserProps {
	className?: string;
}

const User: React.FC<UserProps> = ({ className }) => {
	const { isActive, name } = useUserStore();
	const { setHeaderButton } = useMenuStore();

	useEffect(() => {
		if (isActive) {
			setHeaderButton(1);
		} else {
			setHeaderButton(-1);
		}
	}, [isActive, setHeaderButton]);

	return (
		<div
			className={`items-center gap-4 md:flex-row md:justify-between lg:mb-0 dark:mb-0 ${className}`}
		>
			<div className='flex flex-col'>
				<h1 className='text-xl md:text-base text-light dark:text-light dark:bg-transparent px-2 dark:px-0 rounded-t-lg bg-opacity-75'>
					{name.trim() === '' ? (
						// If the name is empty, show nothing
						''
					) : (
						// If there is a name, display the welcome message
						<>
							<span>Welcome</span> <span className='notranslate'>{name}</span>
						</>
					)}
				</h1>
			</div>
		</div>
	);
};

export default User;
