import React, { useState, useEffect } from 'react';
import { getUrlParams } from '../utils/getUrlParams';

const TakeTheQuiz = () => {
	const [urlParams, setUrlParams] = useState('');

	useEffect(() => {
		setUrlParams(getUrlParams);
	}, []);

	return (
		<a href={`/quiz${urlParams}`} className='btn-primary shadow-xl'>
			take the quiz
		</a>
	);
};

export default TakeTheQuiz;
