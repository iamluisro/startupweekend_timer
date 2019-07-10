import React from 'react';
import Main from '../components/Main';
import Content from '../components/Content';
import Social from '../components/Social';
import CreatorTag from '../components/CreatorTag';
import Timer from '../components/Timer';
import Top from '../components/Top';
import WeekendImg from '../components/WeekendImg';

const App = () => {
	return (
		<Main>
			<Top />
			<WeekendImg />
			<Content>
				<Timer />
			</Content>
			<Social />
			<CreatorTag />
		</Main>
	);
};

export default App;
