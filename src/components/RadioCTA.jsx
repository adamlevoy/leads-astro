import React, { useState, useEffect } from 'react';
import { getUrlParams } from '../utils/getUrlParams';

const RadioCTA = () => {
	const [urlParams, setUrlParams] = useState('');

	useEffect(() => {
		setUrlParams(getUrlParams);
	});

	return (
		<div className='radio-cta shadow-xl-light'>
			<p className='fs-subtitle fw-bold text-neutral-100'>
				I'm seeking coaching for:
			</p>
			<a
				href={`/quiz${urlParams}&coachingfor=My+company`}
				className='radio-button'
			>
				<span>◯</span> My company
			</a>
			<a href={`/quiz${urlParams}&coachingfor=Myself`} className='radio-button'>
				<span>◯</span> Myself
			</a>
		</div>
	);
};

export default RadioCTA;
