import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionText } from './HeroStyles';

const Hero = (props) => (
  <>
    <SectionText>
      Hi 👋, I'm Nwafor Augustine, I'm a software developer and AWS cloud
      specialist with years of experience working on production code with teams.
    </SectionText>
    <SectionText>
      I am proficient in data structures and algorithms, as well as Golang,
      NodeJS, Reactjs, TypeScript, JavaScript, SQL, MongoDB, GraphQL, Rest API,
      and Grpc servers
    </SectionText>

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
