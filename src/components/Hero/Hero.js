import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionText } from './HeroStyles';

const Hero = (props) => (
  <>
    <SectionText>Hi 👋, I'm Nwafor Augustine Onyedikachi</SectionText>
    <LeftSection>
      <SectionText> Software Developer | Cloud Engineer</SectionText>
    </LeftSection>
    <Section>
      <Button onClick={props.handleClick}>
        <a href='https://docs.google.com/document/d/1vGtELoAPjkbiG_-Q1075DjjauhfUE-lrjqXDZLa_81c/edit?usp=sharing'>
          Download CV
        </a>
      </Button>
    </Section>
  </>
);

export default Hero;
