import { useState, useEffect } from 'react';
import { useDebouncedState } from '@/hooks/useDebounce';
import PostService from '@/services/Posts';
import Search from '@/components/Search';

const SearchPage = () => {
	const [keyword, setKeyword] = useDebouncedState('');
	const [data, setData] = useState([]);

	const getPosts = (id) => {
		PostService.getPostsService(id)
			.then((res) => {
				const arrTemp = !!!res.data?.length ? [res.data] : res.data;
				setData(arrTemp);
			})
			.catch()
			.finally();
	};

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		getPosts(keyword);
	}, [keyword]);

	return (
		<div>
			<Search setKeyword={setKeyword} />
			<ul className='mt-4'>
				{data.map((item) => (
					<li key={item.id}>{'id: ' + item.id + ' - ' + item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default SearchPage;
