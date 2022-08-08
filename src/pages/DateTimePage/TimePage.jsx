import React from 'react';
import { useDate } from '@/hooks/useDate';

const TimePage = () => {
	const { date, time, wish } = useDate();

	return (
		<div>
			<div>{date}</div>
			<div>{time}</div>
			<div>{wish}</div>
		</div>
	);
};

export default TimePage;
