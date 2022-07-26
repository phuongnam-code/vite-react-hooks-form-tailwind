import { withTranslation } from 'react-i18next';
import translation from '@/utils/translation';

const HOCTranslated = ({ t, component: Component, ...props }) => {
	const translator = (array, option) => {
		return translation(t)(array, option);
	};

	return <Component translator={translator} {...props} />;
};

export default withTranslation()(HOCTranslated);
