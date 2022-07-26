import React from 'react';

const UseRefPage = () => {
	const [countDown, setCountDown] = React.useState(60);

	// lưu giữ biến
	const idIntervalRef = React.useRef();
	// lưu giữ state trước đó
	const prevStateRef = React.useRef();
	// tạo referent đến một React element
	const inputRef = React.useRef();

	React.useEffect(() => {
		prevStateRef.current = countDown;
	}, [countDown]);

	const handlePlay = () => {
		idIntervalRef.current = setInterval(() => {
			setCountDown((prevState) => prevState - 1);
		}, 1000);
	};

	const handlePause = () => {
		clearInterval(idIntervalRef.current);
	};

	const handleFocusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input
				ref={inputRef}
				type='text'
				name='input_name'
				id='input_name'
				className='block py-2 px-0 w-1/3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				placeholder='Enter here'
			/>

			<div className='mt-2 flex items-center space-x-2'>
				<h1 className='text-3xl'>{countDown}</h1>
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
				<button
					type='button'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					onClick={handleFocusInput}
				>
					Focus input
				</button>
			</div>
			<h1>prevState: {prevStateRef.current}</h1>
		</div>
	);
};

export default UseRefPage;
