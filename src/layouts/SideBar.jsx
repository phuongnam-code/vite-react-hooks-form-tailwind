import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';

import { uuid } from '@/utils';
import { updateCurrentRouteCommonStore, updateTitlePageCommonStore } from '@/store/modules/commonSlice';

const SideBar = ({ menuList, translator }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { currentRoute } = useSelector((state) => state.common);

	useEffect(() => {
		let routeCurrent;

		for (let index = 0; index < menuList.length; index++) {
			const el = menuList[index];
			if (el.path === location.pathname) {
				routeCurrent = el;
				break;
			} else if (el.children?.length) {
				const pathNames = location.pathname.split('/');
				routeCurrent = el.children.find((item) => pathNames.some((elm) => item.path === elm));
				if (routeCurrent) {
					routeCurrent = {
						...routeCurrent,
						path: '/' + routeCurrent?.path,
					};
					break;
				}
			}
		}

		if (routeCurrent) {
			const cloneCurrentRoute = {
				fullPath: location.pathname,
				path: routeCurrent.path,
				name: routeCurrent.name,
				hidden: routeCurrent.hidden,
				iconName: routeCurrent.iconName,
				componentName: routeCurrent.componentName,
			};
			if (!isEqual(cloneCurrentRoute, currentRoute)) {
				dispatch(updateCurrentRouteCommonStore(cloneCurrentRoute));
				dispatch(updateTitlePageCommonStore(cloneCurrentRoute.name));
			}
		} else {
			dispatch(updateTitlePageCommonStore('NOT_FOUND_PAGE'));
		}
	}, [location]);

	const checkActiveParentRoute = (path) => {
		path = path.split('/').filter(Boolean)[0] || '/';
		const routesArray = location.pathname.split('/').filter(Boolean);
		return routesArray.some((el) => el === path);
	};

	return (
		<nav className='nav w-1/5 p-2'>
			{menuList.map((route) => {
				const { path, icon: Icon, name, hidden, children } = route;
				return (
					!hidden && (
						<div key={uuid()}>
							<NavLink
								to={!!!children?.length ? path : path + '/' + children[0]?.path}
								className={({ isActive }) => (checkActiveParentRoute(path) || isActive ? 'nav-link active' : 'nav-link')}
							>
								{/* <Icon /> */}
								<span>{translator(['ROUTES', name])}</span>
							</NavLink>
							{children?.length > 0 && (
								<nav className='sub-nav'>
									{children?.map((subRoute) => {
										const { path: subPath, icon: SubIcon, name: subName, hidden: subHidden } = subRoute;
										return (
											!subHidden && (
												<NavLink
													key={uuid()}
													to={path + '/' + subPath}
													className={({ isActive }) => (isActive ? 'sub-nav-link active' : 'sub-nav-link')}
												>
													• {translator(['ROUTES', subName])}
												</NavLink>
											)
										);
									})}
								</nav>
							)}
						</div>
					)
				);
			})}
		</nav>
	);
};

export default SideBar;
