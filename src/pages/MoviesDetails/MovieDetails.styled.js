import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 60px;
`;

export const Img = styled.img`
  object-fit: cover;
  border: 18px solid #fff;
  border-radius: 8px;
  transition: border 250px linear;

  &:hover {
    border: 18px solid #d0d2d5;
  }
`;

export const MovieInfo = styled.div`
  padding: 10px;
`;

export const MovieTitle = styled.h1`
  margin: 0;
`;

export const Score = styled.span`
  display: flex;
  height: 30px;
  width: 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: olive;
  color: #fff;
`;

export const UserScore = styled.p`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Descr = styled.p`
  line-height: 1.4;
`;

export const Item = styled.li`
  list-style-type: circle;
`;

export const SubPage = styled(NavLink)`
  display: block;
  min-width: 100px;
  text-align: center;
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

export const SubList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  list-style-type: none;
`;

export const GoBack = styled(NavLink)`
  background-color: olive;
  border: 0 solid #fff;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 5px 12px;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 160px;
  position: relative;
  left: 50px;
  top: 15px;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:focus {
  outline: 0;
}

&:after {
  content: '';
  position: absolute;
  border: 1px solid #fff;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

&:hover:after {
  bottom: 2px;
  left: 2px;
}

}
`;
