import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Content from '../components/Content';
import Social from '../components/Social';
import CreatorTag from '../components/CreatorTag';
import Timer from '../components/Timer';
import WeekendImg from '../components/WeekendImg';
import Partners from '../components/Partners';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Montserrat', sans-serif;
		margin: 0;
		padding: 0;
		background: #E3E3E3;
	}
`;

const App = () => {
	return (
		<Main>
			<GlobalStyle />

			<WeekendImg />
			<Timer />
			<Partners />
			<CreatorTag />
		</Main>
	);
};

export default App;
