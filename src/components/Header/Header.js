import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Image,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>Nwafor Augustine</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/NwaforAugustine321'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nwafor-augustine-onyedikachi-09ba961b9/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>

      <Image src='https://lh3.googleusercontent.com/a-/AOh14GhbDz0PoFStqczlEhhkTLeSowA_oWOrCmLYdwIG=w60-h60' />
    </Div3>
  </Container>
);

export default Header;
