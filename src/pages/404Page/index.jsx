import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<h1 style={{ padding: '1rem', textAlign: 'center' }}>
				<span>There's nothing here! go </span>
				<Link to='/'>Home Page</Link>
			</h1>
		</div>
	);
}

export default NotFound;
