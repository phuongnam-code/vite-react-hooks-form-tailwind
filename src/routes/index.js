import { lazy } from 'react';

const lazyLoadComponent = (path, pathChildren = 'index') => {
  return lazy(() => import(`../pages/${path}/${pathChildren}.jsx`));
};

const routes = [
  {
    path: '/',
    name: 'Home Page',
    keyName: 'HOME_PAGE',
    hidden: false,
    component: lazyLoadComponent('HomePage'),
    children: [],
  },
  {
    path: '/react-hooks-form',
    name: 'Form Page',
    keyName: 'FORM_PAGE',
    hidden: false,
    component: lazyLoadComponent('FormPage'),
    children: [],
  },
  {
    path: '/react-hooks',
    name: 'Hooks Page',
    keyName: 'HOOKS_PAGE',
    hidden: false,
    component: lazyLoadComponent('HooksPage'),
    children: [
      {
        path: 'use-ref',
        name: 'Use Ref Page',
        keyName: 'USE_REF_PAGE',
        hidden: false,
        component: lazyLoadComponent('HooksPage', 'UseRefPage'),
      },
      {
        path: 'use-imperative-handle',
        name: 'Use Imperative Handle Page',
        keyName: 'USE_IMPERATIVE_HANDLE_PAGE',
        hidden: false,
        component: lazyLoadComponent('HooksPage', 'UseImperativeHandlePage'),
      },
    ],
  },
  {
    path: '/iframe',
    name: 'Iframe Page',
    keyName: 'IFRAME_PAGE',
    hidden: false,
    component: lazyLoadComponent('IframePage'),
    children: [],
  },
  {
    path: '*',
    name: 'Not Found Page',
    keyName: 'NOT_FOUND_PAGE',
    hidden: true,
    component: lazyLoadComponent('404Page'),
  },
];

export default routes;
