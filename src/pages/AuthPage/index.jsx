import { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Button from '@/components/Button';

// Configure Firebase.
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
};

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
	signInFlow: 'popup',
	// signInSuccessUrl: '/',
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const index = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [title, setTitle] = useState('Authentication form');
	const [currentRoute, setCurrentRoute] = useState('/auth');
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (location?.pathname) {
			setTitle(location.pathname === '/auth/login' ? 'Login form' : 'Register form');
			setCurrentRoute(location.pathname);
		}
	}, [location]);

	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
			setIsSignedIn(!!user);
		});
		return () => unregisterAuthObserver();
	}, []);

	const renderForm = () => {
		if (currentRoute === '/auth/login') return <LoginPage firebase={firebase} setIsSignedIn={setIsSignedIn} />;
		else if (currentRoute === '/auth/register') return <RegisterPage firebase={firebase} />;
		return <div>Nothing here!</div>;
	};

	if (!isSignedIn) {
		return (
			<div>
				<h1 className='text-2xl font-semibold text-center'>{title}</h1>
				<div className='text-center'>
					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
					<p>
						<span>-----------------------------</span>
						<span>Or</span>
						<span>-----------------------------</span>
					</p>
				</div>
				{renderForm()}
			</div>
		);
	}
	return (
		<div>
			<h1>
				My App, go back{' '}
				<span className='cursor-pointer text-blue-500' onClick={() => navigate('/')}>
					Home page
				</span>
			</h1>
			<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
			<Button
				label='Sign-out'
				styleBtn='light'
				onClickButton={() => {
					firebase.auth().signOut();
					setIsSignedIn(false);
				}}
			/>
		</div>
	);
};

export default index;
