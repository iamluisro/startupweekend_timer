import React from 'react';
import styled from 'styled-components';

const SocialStyle = styled.div`
	display: grid;
	justify-content: center;
`;
const Social = () => (
	<SocialStyle>
		<div className='Social-component'>
			<p>facebook</p>
		</div>
	</SocialStyle>
);

export default Social;
