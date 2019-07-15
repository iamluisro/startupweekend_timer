import React from 'react';
import styled from 'styled-components';
import g4sLogo from '../images/swg.png';
import cologo from '../images/co_logo.png';

const PartnersStyled = styled.div`
	display: grid;
	justify-content: center;
`;

const G4sStyledLogo = styled.img`
	width: 300px;
	padding: 0 .5em 0 0;
	@media only screen and (max-width: 767px) {
		width: 150px;
	}
`;

const CoStyledLogo = styled.img`
	width: 50px;
	padding: 0 0 0 0.5em;
	@media only screen and (max-width: 767px) {
		width: 25px;
	}
`;

const Partners = () => (
	<PartnersStyled>
		<span>
			{' '}
			<G4sStyledLogo src={g4sLogo} alt='g4s' />
			<CoStyledLogo src={cologo} alt='co_logo' />
		</span>
	</PartnersStyled>
);

export default Partners;
