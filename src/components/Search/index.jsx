import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const Search = ({ setKeyword }) => {
	return (
		<div className='w-full lg:w-3/5 border p-2 flex items-center space-x-2 rounded'>
			<SearchIcon className='w-5 h-5' />
			<input type='search' placeholder='Enter keyword' className='text-sm w-full outline-none' onChange={(e) => setKeyword(e.target.value)} />
		</div>
	);
};

export default Search;
