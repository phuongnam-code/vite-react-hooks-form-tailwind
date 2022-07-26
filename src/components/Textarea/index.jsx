import classNames from '@/utils/classNames';

const Textarea = ({ inputProps, classes, idFor, placeholder, rows = 4, cols = 5, isError, readOnly, disabled }) => {
	return (
		<textarea
			type='text'
			id={idFor}
			{...inputProps}
			placeholder={placeholder}
			rows={rows}
			cols={cols}
			readOnly={readOnly}
			disabled={disabled}
			className={classNames(
				'w-full px-2 py-1 outline-sky-100 border rounded text-base resize-none',
				isError && 'border-red-500 outline-red-300',
				classes
			)}
		/>
	);
};

export default Textarea;
