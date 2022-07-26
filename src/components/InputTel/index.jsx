import { useState } from 'react';
import classNames from '@/utils/classNames';

const InputTel = ({ inputProps, classes, idFor, placeholder, isError, readOnly, disabled }) => {
	const [inputValue, setInputValue] = useState('');
	const handleChangeInput = (e) => {
		let valueChange = e.target.validity.valid ? value.e.target : inputValue;
		setInputValue(valueChange);
	};
	return (
		<input
			type='text'
			id={idFor}
			pattern='[0-9]*'
			{...inputProps}
			placeholder={placeholder}
			value={inputValue}
			onInput={handleChangeInput}
			className={classNames('w-full px-2 py-1 outline-sky-100 border rounded text-base', isError && 'border-red-500 outline-red-300', classes)}
			readOnly={readOnly}
			disabled={disabled}
		/>
	);
};

export default InputTel;
