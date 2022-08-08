import React, { useState, useEffect } from 'react';
import { getUrlParams } from '../utils/getUrlParams';

const Logo = () => {
	const [urlParams, setUrlParams] = useState('');

	useEffect(() => {
		setUrlParams(getUrlParams);
	}, []);

	return (
		<div className='logo'>
			<a href={`/${urlParams}`}>
				<img src='/assets/logo.svg' alt='logo' />
			</a>
		</div>
	);
};

export default Logo;
