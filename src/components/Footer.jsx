import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { getUrlParams } from '../utils/getUrlParams';

const Footer = () => {
	const [urlParams, setUrlParams] = useState('');

	useEffect(() => {
		setUrlParams(getUrlParams);
	}, []);

	return (
		<footer className='p-block-700'>
			<Logo />
			<nav>
				<a href={`/contact-us${urlParams}`}>Contact Us</a>
				<a href={`/terms-of-service${urlParams}`}>Terms of Service</a>
				<a href={`/privacy-policy${urlParams}`}>Privacy Policy</a>
				<p className='text-neutral-100'>&copy; Copyright 2022</p>
			</nav>
		</footer>
	);
};

export default Footer;
