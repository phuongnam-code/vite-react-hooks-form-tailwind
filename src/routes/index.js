import { lazy } from 'react';

const lazyLoadComponent = (path, pathChildren = 'index') => {
  return lazy(() => import(`../pages/${path}/${pathChildren}.jsx`));
};

const lazyLoadIcon = (iconName = 'BanIcon') => {
  return lazy(() => import(/* @vite-ignore */`./../../node_modules/@heroicons/react/solid/${iconName}`));
};

const routes = [
  {
    path: '/',
    icon: lazyLoadIcon(),
    name: 'HOME_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'HomePage',
    element: lazyLoadComponent('HomePage'),
    children: [],
  },
  {
    path: '/react-hooks-form',
    icon: lazyLoadIcon(),
    name: 'FORM_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'FormPage',
    element: lazyLoadComponent('FormPage'),
    children: [],
  },
  {
    path: '/react-hooks',
    icon: lazyLoadIcon(),
    name: 'HOOKS_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'HooksPage',
    element: lazyLoadComponent('HooksPage'),
    children: [
      {
        path: 'use-ref',
        icon: lazyLoadIcon(),
        name: 'USE_REF_PAGE',
        hidden: false,
        iconName: '',
        componentName: 'UseRefPage',
        element: lazyLoadComponent('HooksPage', 'UseRefPage'),
      },
      {
        path: 'use-imperative-handle',
        icon: lazyLoadIcon(),
        name: 'USE_IMPERATIVE_HANDLE_PAGE',
        hidden: false,
        iconName: '',
        componentName: 'UseImperativeHandlePage',
        element: lazyLoadComponent('HooksPage', 'UseImperativeHandlePage'),
      },
    ],
  },
  {
    path: '/iframe',
    icon: lazyLoadIcon(),
    name: 'IFRAME_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'IframePage',
    element: lazyLoadComponent('IframePage'),
    children: [],
  },
  {
    path: '/date-time',
    icon: lazyLoadIcon(),
    name: 'DATE_TIME_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'DateTimePage',
    element: lazyLoadComponent('DateTimePage'),
    children: [],
  },
  {
    path: '/search',
    icon: lazyLoadIcon('SearchCircleIcon'),
    name: 'SEARCH_PAGE',
    hidden: false,
    iconName: 'SearchCircleIcon',
    componentName: 'SearchPage',
    element: lazyLoadComponent('SearchPage'),
    children: [],
  },
  {
    path: '/developer-tools',
    icon: lazyLoadIcon(),
    name: 'DEVELOPER_TOOLS_PAGE',
    hidden: false,
    iconName: '',
    componentName: 'DeveloperToolsPage',
    element: lazyLoadComponent('DeveloperToolsPage'),
    children: [],
  },
  {
    path: '*',
    icon: lazyLoadIcon(),
    name: 'NOT_FOUND_PAGE',
    hidden: true,
    iconName: 'BanIcon',
    componentName: '404Page',
    element: lazyLoadComponent('404Page'),
  },
];

export default routes;
