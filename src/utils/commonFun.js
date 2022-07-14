// ref: https://abhishekdutta.org/blog/standalone_uuid_generator_in_javascript.html
const uuid = () => {
	const temp_url = URL.createObjectURL(new Blob());
	const uuid = temp_url.toString();
	URL.revokeObjectURL(temp_url);
	return uuid.split(/[:\/]/g).pop();
};

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export { uuid, classNames };
