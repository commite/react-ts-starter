import styled, { keyframes } from 'styled-components';
import { ImgHTMLAttributes } from 'react';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
 `;

export const Grid = styled.div`
  text-align: center;
`;

export const Logo = styled.img.attrs({
   src: (props: ImgHTMLAttributes<{}>) => props.src || '',
   alt: (props: ImgHTMLAttributes<{}>) => props.alt || ''
 })`
  height: 80px;
  animation: ${rotate360} infinite 20s linear;
 `;

export const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const Intro = styled.p`
  font-size: large;
`;