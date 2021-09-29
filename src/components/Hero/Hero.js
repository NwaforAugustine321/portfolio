import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>Full Stack Developer / MERN</SectionText>
				<Button onClick={props.handleClick}>
					<a href='https://drive.google.com/file/d/1-azY4EZqbWi-X1qS1Xs4gR2kQJnySfi8/view?usp=sharing'>Download CV</a>
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
