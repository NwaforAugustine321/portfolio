import styled from 'styled-components';

export const LeftSection = styled.div`
  text-align: center;
`;

// @media ${(props) => props.theme.breakpoints.sm} {
//     width: 90%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;

//     margin: 0 auto;
//   }
export const SectionText = styled.p`
  font-size: 30px;
  line-height: 30px;
  font-weight: 300;
  padding-bottom: 2rem;
  text-align: center;
  // color: white @media ${(props) => props.theme.breakpoints.md} {
  //   //max-width: 670px;
  //   font-size: 20px;
  //   line-height: 32px;
  //   padding-bottom: 24px;
  // }

  // @media ${(props) => props.theme.breakpoints.sm} {
  //   font-size: 16px;
  //   line-height: 24px;
  //   padding-bottom: 16px;
  // }
`;