import { classNames } from '@/utils';

const Label = ({ idFor, label, classes }) => {
	return (
		<label htmlFor={idFor} className={classNames('w-full text-base text-gray-500 font-semibold', classes)}>
			{label}
		</label>
	);
};

export default Label;
