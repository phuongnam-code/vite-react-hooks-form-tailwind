import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { uuid } from '@/utils';
import Header from '@/components/Header';
import ErrorBoundary from '@/components/ErrorBoundary';
import TranslatedHOC from '@/components/HOC/TranslatedHOC';

const Wrapper = ({ menuList, translator }) => {
	const { titlePage } = useSelector((state) => state.common);

	return (
		<div className='wrapper w-4/5'>
			<Header title={translator(['ROUTES', titlePage])} />
			<div className='p-3 border-t-4 border-gray-200 h-[calc(100vh-52px)] overflow-y-auto'>
				<ErrorBoundary>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							{menuList.map((route) => {
								const { path, element, children } = route;
								return (
									<Route key={uuid()} path={path} element={<TranslatedHOC component={element} />}>
										{children?.map((subRoute) => {
											const { path: subPath, element: subElement } = subRoute;
											return <Route key={uuid()} path={subPath} element={<TranslatedHOC component={subElement} />} />;
										})}
									</Route>
								);
							})}
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	);
};

export default Wrapper;
