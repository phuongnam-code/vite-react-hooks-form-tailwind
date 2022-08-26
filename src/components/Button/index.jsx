import { LoadingSVG } from '@/assets/image/SVG';
import { classNames } from '@/utils';

const cssBtn = {
	normal: 'focus:outline-none text-black font-medium rounded-lg text-sm hover:text-blue-700 px-4 py-2',
	default: 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none text-white font-medium rounded-lg text-sm px-4 py-2',
	light:
		'bg-white hover:bg-gray-100 border border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none text-gray-900 font-medium rounded-lg text-sm px-4 py-2',
};

const cssLoading = {
	normal: 'text-blue-600',
	default: 'text-white',
	light: 'text-blue-600',
};

const Button = ({
	type = 'button', // 'submit' | 'reset' | 'button',
	label = 'button',
	loading = false,
	disable = false,
	classes = '',
	onClickButton = () => {},
	styleBtn = 'default', // 'normal' | 'default' | 'light',
}) => {
	return (
		<button
			type={type}
			disabled={disable}
			onClick={onClickButton}
			className={classNames(cssBtn[styleBtn], disable && 'cursor-not-allowed', loading && 'flex items-center justify-between space-x-2', classes)}
		>
			{loading && <LoadingSVG classes={classNames(cssLoading[styleBtn])} />}
			<span>{label}</span>
		</button>
	);
};

export default Button;
