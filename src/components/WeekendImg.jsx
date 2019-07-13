import React from 'react';
import swlogo from '../images/sw_logo.png';
import styled from 'styled-components';

const WeekndStyle = styled.div`text-align: center;`;

const HeaderImg = styled.img`
	width: 100%;
	@media only screen and (max-width: 767px) {
		width: 250px;
	}
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
