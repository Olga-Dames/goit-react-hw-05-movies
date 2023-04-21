import styled from "styled-components";

export const CastList = styled.ul`
  list-style: none;
  border: 2px solid olive;
  padding: 30px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CastItem = styled.li`
  margin-bottom: 30px;
  
  overflow: hidden;

`;

export const CastTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: navy;
  text-align: center;
`;

export const Content = styled.p`
  line-height: 1.3;
  margin: 0;
  font-size: 18px;
  text-align: center;

`;

export const Poster = styled.img`
border-radius: 30px;
`;

export const Name = styled.h4`
  margin: 0;
  text-align: center;
`;