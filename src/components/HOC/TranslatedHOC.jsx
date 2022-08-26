import { withTranslation } from 'react-i18next';
import { translation } from '@/utils';

const Translated = ({ t, i18n, component: Component, ...props }) => {
	const translator = (array, option) => {
		return translation(t)(array, option);
	};
	if (!!!Component) return;
	return <Component translator={translator} {...props} />;
};

const TranslatedHOC = withTranslation()(Translated);

export default TranslatedHOC;
