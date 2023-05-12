import React from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>

    <SectionText>
      Language : Node.js, Golang, JavaScript, TypeScript, HTML5/CSS3 and SQL.{' '}
      <br />
      Technologies : React.js, Express.js and AWS services.
      <br />
      Others : REST, APIs, Agile, OOP, GRPC.
    </SectionText>
  </Section>
);

export default Technologies;
