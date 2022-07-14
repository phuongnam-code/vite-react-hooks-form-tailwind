import { lazy } from 'react';

const lazyLoadComponent = (path) => {
	return lazy(() => import(`../pages/${path}/index.jsx`));
};

const routes = [
	{
		path: '/',
		name: 'HomePage',
		hidden: false,
		component: lazyLoadComponent('HomePage'),
		child: [],
	},
	{
		path: '/react-hooks-form',
		name: 'FormPage',
		hidden: false,
		component: lazyLoadComponent('FormPage'),
		child: [],
	},
	{
		path: '*',
		name: 'NotFoundPage',
		hidden: true,
		component: lazyLoadComponent('404Page'),
	},
];

export default routes;
