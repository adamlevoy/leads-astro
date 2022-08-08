import React, { useState, useEffect } from 'react';

const DynamicHeadline = ({ prefix = 'free', suffix = 'matchmaking' }) => {
	const param = 'lpkw';
	const [keyword, setKeyword] = useState('Executive Coach');

	function keywordInsert() {
		if (window.location.search) {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const searchQuery = urlParams.get(param);
			setKeyword(searchQuery);
		} else {
			console.log(keyword);
		}
	}

	useEffect(() => {
		keywordInsert();
	}, []);

	return (
		<h1 className='fs-primary-heading fw-bold text-neutral-100 uppercase'>
			{prefix}
			<br></br> <span className='text-primary-400'>{keyword}</span>
			<br></br> {suffix}
		</h1>
	);
};

export default DynamicHeadline;
