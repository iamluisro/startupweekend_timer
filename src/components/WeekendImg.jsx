import React from 'react';
import swlogo from '../images/sw_logo.png';
import styled from 'styled-components';

const WeekndStyle = styled.div`text-align: center;`;

const HeaderImg = styled.img`
	width: 70%;
	padding: 2em 0 0 0;
`;

const WeekendImg = () => (
	<WeekndStyle>
		<div className='WeekendImg'>
			<div className='WeekendImg-container'>
				<HeaderImg src={swlogo} alt='startupweekend logo' />
			</div>
		</div>
	</WeekndStyle>
);

export default WeekendImg;
