import { classNames } from '@/utils/commonFun';

const Input = ({ inputProps, classes, idFor, placeholder, isError, readOnly, disabled }) => {
  return (
    <input
      id={idFor}
      className={classNames(
        'w-full px-2 py-1 outline-sky-100 border rounded text-base',
        isError && 'border-red-500 outline-red-300',
        classes
      )}
      type="text"
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      {...inputProps}
    />
  );
};

export default Input;
