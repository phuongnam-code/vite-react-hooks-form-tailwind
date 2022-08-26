import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '@/store';
import App from '@/App';
import '@/assets/css/index.css';
import '@/translations';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	// 	<BrowserRouter>
	// 		<App />
	// 	</BrowserRouter>
	// </React.StrictMode>

	// fix temp waiting for merged from firebaseui-web-react (https://github.com/firebase/firebaseui-web-react/pull/173)
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
