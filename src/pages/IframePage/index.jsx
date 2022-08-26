import { useState, useEffect } from 'react';

const IframePage = () => {
	const [objIframe, setObjIframe] = useState({
		iframe: null,
		iWindow: null,
		iDocument: null,
	});

	useEffect(() => {
		const iframeQuery = document.getElementById('myIframe');
		const iWindow = iframeQuery.contentWindow;
		const iDocument = iWindow.document;
		setObjIframe({ iframe: iframeQuery, iWindow, iDocument });
	}, []);

	useEffect(() => {
		if (objIframe.iframe) {
			// console.log(objIframe.iframe);
			const app = objIframe.iDocument.getElementById('app');
			// console.log(app);
		}
	}, [objIframe]);

	return <iframe id='myIframe' src='https://nerdcave.com/tailwind-cheat-sheet' width='1366px' height='768px'></iframe>;
};

export default IframePage;
