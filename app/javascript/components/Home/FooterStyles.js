import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 8px;
  padding-top: 24px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  }
`;

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
 `;

 export const Heading = styled.h2`
 font-size: 24px;
 font-weight: bold;
`;

export const BodyText = styled.p`
  font-size: 18px;
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const FooterLink = styled.a`
  color: #000;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const FooterLinkSocial = styled.a`
  padding-left: 8px;
  font-size: 34px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
}
`
export const SocialIcon = styled.div`
 display: flex;
 align-items: center;
`

export const Img = styled.img`
  height: 100px;
  width: auto;
`
