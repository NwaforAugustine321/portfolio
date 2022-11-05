import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	// { number: 1, text: 'Open Source Projects' },
	// { number: 1900, text: 'Github Followers', },
	// { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Contact</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
