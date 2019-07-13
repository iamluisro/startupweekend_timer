import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-style: normal;
	font-weight: normal;
	font-size: 90px;
	display: grid;
	color: #2a3842;

	@media only screen and (max-width: 767px) {
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		color: #2a3842;
	}
`;

const H1Styled = ({ name }) => <StyledH1>{name}</StyledH1>;

export default H1Styled;
