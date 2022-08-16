import React, { useState, useEffect } from 'react';
import { getUrlParams } from '../utils/getUrlParams';

const RadioCTA_v2 = () => {
	const [urlParams, setUrlParams] = useState('');

	useEffect(() => {
		setUrlParams(getUrlParams);
	});

	return (
		<div className='radio-cta-2'>
			<div className='radio-cta-content'>
				<p className='fs-subtitle fw-bold text-neutral-100'>
					I'm seeking coaching for:
				</p>
				<a
					href={`/quiz${urlParams}&coachingfor=My+company`}
					className='radio-button'
				>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 16 16'
						>
							<g fill='currentColor'>
								<path
									fill-rule='evenodd'
									d='M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z'
								/>
								<path d='M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z' />
							</g>
						</svg>
					</span>{' '}
					My company
				</a>
				<a
					href={`/quiz${urlParams}&coachingfor=Myself`}
					className='radio-button'
				>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 16 16'
						>
							<g fill='currentColor'>
								<path d='M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z' />
								<path
									fill-rule='evenodd'
									d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
								/>
							</g>
						</svg>
					</span>{' '}
					Myself
				</a>
			</div>
		</div>
	);
};

export default RadioCTA_v2;
