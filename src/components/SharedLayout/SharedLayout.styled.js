import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 20px 25px;
`;

export const Header = styled.header`
  margin: 0 auto;
  width: 1200px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #212121;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;

     text-transform: uppercase;
      background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
        font-size: 45px;
  }
  
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;
  border-radius: 7px;
  background-color: #050482;
  color: #fff;
  text-decoration: none;

  &.active {
    color: #050482;
    background-color: #fff;
    border: 1px solid #050482;
  }
`;
