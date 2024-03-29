import { classNames } from '@/utils';

const Input = ({ inputProps, classes, idFor, placeholder, isError, readOnly, disabled, type = 'text' }) => {
	return (
		<input
			id={idFor}
			className={classNames('w-full px-2 py-1 outline-sky-100 border rounded text-base', isError && 'border-red-500 outline-red-300', classes)}
			type={type}
			readOnly={readOnly}
			disabled={disabled}
			placeholder={placeholder}
			{...inputProps}
		/>
	);
};

export default Input;
