import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import '@/assets/css/App.scss';
import { translation } from '@/utils';
import SideBar from '@/layouts/SideBar';
import Wrapper from '@/layouts/Wrapper';
import routes from '@/routes';
import AuthPage from '@/pages/AuthPage';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_API_KEY,
// 	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
// 	projectId: import.meta.env.VITE_PROJECT_ID,
// 	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
// 	appId: import.meta.env.VITE_APP_ID,
// 	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

function App() {
	const { t } = useTranslation();
	const location = useLocation();

	// Initialize Firebase
	// const app = initializeApp(firebaseConfig);
	// const analytics = getAnalytics(app);

	const translator = (array, option) => {
		return translation(t)(array, option);
	};

	if (location.pathname === '/auth/login' || location.pathname === '/auth/register') return <AuthPage />;

	return (
		<div className='App'>
			<SideBar menuList={routes} translator={translator} />
			<Wrapper menuList={routes} translator={translator} />
		</div>
	);
}

export default App;
