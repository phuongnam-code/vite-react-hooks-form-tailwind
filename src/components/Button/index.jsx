import { LoadingSVG } from '@/assets/image/SVG';
import { classNames } from '@/utils/commonFun';

const Button = ({
  type = 'submit', // 'submit' | 'reset' | 'button',
  label,
  loading = false,
  disable = false,
  classes,
  onClickButton,
}) => {
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onClickButton}
      className={classNames(
        'px-3 py-1 bg-sky-500 hover:bg-sky-600 rounded-md text-base text-white',
        classes,
        disable && 'cursor-not-allowed'
      )}
    >
      {loading && <LoadingSVG />}
      {label}
    </button>
  );
};

export default Button;
