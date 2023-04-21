import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export const Item = styled.li`
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Poster = styled.img`
  object-fit: c cover;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.04);
  }
`;

export const MovieTitle = styled.p`
  text-align: center;
  color: #212121;
  font-size: 20px;
  transition: color 250ms linear;

  &:hover {
    color: navy;
    text-decoration: underline;
  }
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
`;
