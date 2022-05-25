import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies in the web development world. From
      Front-end To Back-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js & Redux & Next.js & JavaScript & HTML5/CSS3 & TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nodejs & MYSQL & AWS Ec2,AWS Lambda & AWS SES & Java(OOP) & REST API
            & GRPC
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiZend size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
