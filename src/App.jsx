import { useState, useEffect, Suspense } from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@/assets/css/App.scss';
import ErrorBoundaryPage from '@/pages/ErrorBoundaryPage';
import HOCTranslated from '@/components/HOC/HOCTranslated';
import Header from '@/components/Header';
import routes from '@/routes';
import uuid from '@/utils/uuid';
import translation from '@/utils/translation';

function App() {
	const { t } = useTranslation();
	const location = useLocation();
	const [titlePage, setTitlePage] = useState();

	const translator = (array, option) => {
		return translation(t)(array, option);
	};

	useEffect(() => {
		let objTemp;
		for (let index = 0; index < routes.length; index++) {
			let el = routes[index];
			if (el.path === location.pathname) {
				objTemp = el;
				break;
			} else if (el.children?.length) {
				const pathNames = location.pathname.split('/');
				objTemp = el.children.find((item) => pathNames.some((elm) => item.path === elm));
				if (objTemp) break;
			}
		}
		setTitlePage(objTemp?.keyName || 'NOT_FOUND_PAGE');
	}, [location]);

	return (
		<div className='App'>
			<nav className='nav w-1/5'>
				{routes.map((route) => {
					const { path, keyName, hidden } = route;
					return (
						!hidden && (
							<NavLink key={uuid()} to={path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
								{translator(['ROUTES', keyName])}
							</NavLink>
						)
					);
				})}
			</nav>
			<div className='wrapper w-4/5'>
				<Header title={translator(['ROUTES', titlePage])} />
				<div className='p-3 border-t-4 border-gray-200 h-[calc(100vh-60px)] overflow-y-auto'>
					<ErrorBoundaryPage>
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								{routes.map((route) => {
									const { path, component: Component, children } = route;
									return (
										<Route key={uuid()} path={path} element={<HOCTranslated component={Component} routes={children} />}>
											{children?.map((routeChild) => {
												const { path: pathChild, component: ComponentChild } = routeChild;
												return <Route key={uuid()} path={pathChild} element={<HOCTranslated component={ComponentChild} />} />;
											})}
										</Route>
									);
								})}
							</Routes>
						</Suspense>
					</ErrorBoundaryPage>
				</div>
			</div>
		</div>
	);
}

export default App;
