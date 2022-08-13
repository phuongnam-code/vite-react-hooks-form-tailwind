import React from 'react';

const handleChange =
	(handler) =>
	({ target: { files } }) =>
		handler(files.length ? { file: files[0], name: files[0].name } : {});

const InputFile = ({ input: { onChange, onBlur, value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => {
	return <input type='file' onChange={handleChange(onChange)} onBlur={handleChange(onBlur)} {...inputProps} {...props} />;
};

export default InputFile;
