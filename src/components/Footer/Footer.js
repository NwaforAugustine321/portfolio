import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons, Image } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:07031045066'>07031045066</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:nwaforaugustine422@gmail.com'>
            nwaforaugustine422@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Move with clear code skills</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/NwaforAugustine321'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/nwafor-augustine-onyedikachi-09ba961b9/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='#'>
            <Image src='https://lh3.googleusercontent.com/a-/AOh14GhbDz0PoFStqczlEhhkTLeSowA_oWOrCmLYdwIG=w60-h60' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
