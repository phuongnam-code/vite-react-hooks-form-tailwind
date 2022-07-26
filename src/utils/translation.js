const translation = (t) => (array, option) => t(array.filter(Boolean).join('.'), option);

export default translation;
