import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nwafor Augustine Onyedikachi
        </SectionTitle>
        <SectionText>
          Full Stack Developer Software Developer with 3+ years of experience.
          Comfortable working with JavaScript, Nodejs, Java(OOP) ,Aws Servics
          ,React, Redux, TypeScript, Git/Github, HTML5/CSS3.
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href='https://drive.google.com/file/d/1VGLcLTn0PRqhE7fkIHAjRO05XGQG4QZS/view?usp=sharing'>
            Download CV
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
