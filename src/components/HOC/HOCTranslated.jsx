import { withTranslation } from 'react-i18next';
import { translation } from '@/utils';

const Translated = ({ t, i18n, component: Component, ...props }) => {
	const translator = (array, option) => {
		return translation(t)(array, option);
	};

	return <Component translator={translator} {...props} />;
};

const HOCTranslated = withTranslation()(Translated);

export default HOCTranslated;
