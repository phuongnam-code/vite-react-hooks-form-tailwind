import React from 'react';
import Video from '@/components/Video';

const UseImperativeHandlePage = () => {
	const videoRef = React.useRef();
	const handlePlay = () => {
		videoRef.current.play();
	};
	const handlePause = () => {
		videoRef.current.pause();
	};

	return (
		<div>
			<div className='flex space-x-2 my-2'>
				<button
					type='button'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					onClick={handlePlay}
				>
					Play
				</button>
				<button
					type='button'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					onClick={handlePause}
				>
					Pause
				</button>
			</div>

			<Video ref={videoRef} />
		</div>
	);
};

export default UseImperativeHandlePage;
