import { useState, useEffect } from 'react';
import { devtools, IdleTimer } from '@/utils';
import Button from '@/components/Button';

const index = () => {
	const [devtoolsObj, setDevtoolsObj] = useState();
	const [isDevtools, setIsDevtools] = useState(false);

	const turnOffDevtools = () => {
		// turn off right mouse menu
		document.addEventListener('contextmenu', (event) => event.preventDefault());

		document.onkeydown = function (e) {
			// disable F12 key
			if (e.keyCode == 123) {
				return false;
			}
			// disable I key
			if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
				return false;
			}
			// disable J key
			if ((e.ctrlKey && e.shiftKey && e.keyCode == 74) || (e.ctrlKey && e.keyCode == 74)) {
				return false;
			}
			// "S" key + macOS
			if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
				if (e.stopPropagation) {
					e.stopPropagation();
				} else if (window.event) {
					window.event.cancelBubble = true;
				}
				e.preventDefault();
				return false;
			}
			// disable U key
			if (e.ctrlKey && e.keyCode == 85) {
				return false;
			}
			// disable P key
			if (e.ctrlKey && e.keyCode == 80) {
				return false;
			}
		};
	};

	window.addEventListener('devtoolschange', (event) => {
		setDevtoolsObj(event.detail);
	});

	const toggleDevtools = () => {
		setIsDevtools(!isDevtools);
	};

	useEffect(() => {
		setDevtoolsObj(devtools);
	}, []);

	useEffect(() => {
		isDevtools && turnOffDevtools();
	}, [isDevtools]);

	const [isTimeout, setIsTimeout] = useState(false);

	useEffect(() => {
		const timer = new IdleTimer({
			timeout: 10, //expire after 10 seconds
			onTimeout: () => {
				setIsTimeout(true);
			},
			onExpired: () => {
				// do something if expired on load
				setIsTimeout(true);
			},
		});

		return () => {
			timer.cleanUp();
		};
	}, []);

	return (
		<div>
			<p>Is DevTools open: {devtoolsObj?.isOpen?.toString()}</p>
			{devtoolsObj?.isOpen && <p>DevTools orientation: {devtoolsObj?.orientation}</p>}
			<br />
			<p>DevTools disable? {isDevtools.toString()}</p>
			<Button type='button' label='Toggle Developer Tools' onClickButton={toggleDevtools} />
			<br />
			<br />
			<p>If you are inactive for 10 seconds, you will get time out</p>
			<p>You are "{isTimeout ? 'Timeout' : 'Active'}"</p>
		</div>
	);
};

export default index;
