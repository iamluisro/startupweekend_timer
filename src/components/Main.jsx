import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
	display: grid;
	grid-template-columns: minmax(auto, 1024px);
	grid-auto-rows: 95vh;
	justify-content: center;
	padding: 1em;
	border: 1px solid blue;
`;

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	grid-row-gap: 0.5em;
	border: 1px solid purple;

	@media only screen and (max-width: 767px) {
		grid-template-columns: 1fr;
		border: 1px solid yellow;
	}
`;

const Main = ({ children }) => (
	<MainStyled>
		<MainContainer>{children}</MainContainer>
	</MainStyled>
);

export default Main;
