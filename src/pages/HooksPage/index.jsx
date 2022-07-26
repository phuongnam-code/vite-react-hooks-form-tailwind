import { NavLink, Outlet } from 'react-router-dom';
import uuid from '@/utils/uuid';

const index = ({ translator, routes }) => {
	return (
		<>
			<nav className='nav'>
				{routes?.map((route) => {
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
			<Outlet />
		</>
	);
};

export default index;
