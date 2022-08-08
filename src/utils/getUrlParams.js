import React from 'react';

export const getUrlParams = () => {
	let queryString;
	if (window.location.search) {
		queryString = window.location.search;
		return `${queryString}`;
	} else {
		queryString = '?';
		return queryString;
	}
};
