import React from 'react';
import styled from 'styled-components';
import StyledH1 from '../styled/h1Styled';

const TopStyle = styled.div`
	text-align: center;
	align-items: center;
`;

const Top = () => (
	<TopStyle>
		<div className='Top'>
			<div className='Top-container'>
				<StyledH1 name='Hora de Presentar' />
			</div>
		</div>
	</TopStyle>
);

export default Top;
