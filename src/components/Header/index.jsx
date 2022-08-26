import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/auth/login');
	};

	return (
		<div className='flex items-center justify-between px-3 py-2'>
			<h1 className='text-2xl font-semibold'>{title}</h1>
			<div>
				<Button label='Sign in' styleBtn='normal' onClickButton={handleLogin} />
			</div>
		</div>
	);
};

export default Header;
