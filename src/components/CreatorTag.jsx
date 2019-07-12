import React from 'react';
import styled from 'styled-components';

const CreatorStyled = styled.div`
	display: grid;
	justify-content: right;
`;

const CreatorStyledP = styled.p`
	justify-content: right;
	font-size: 10px;
`;

const CreatorTag = () => (
	<CreatorStyled>
		<div className='CreatorTag-container'>
			<CreatorStyledP>
				by Luis Rodriguez{' '}
				<a href='https://github.com/iamluisro' target='blank'>
					Github
				</a>
			</CreatorStyledP>
		</div>
	</CreatorStyled>
);

export default CreatorTag;
