import styled from 'styled-components';

export const ContainerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  gap: 20px;
`;

export const Container = styled.li`
  width: 630px;
  height: 400px;

  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;

  background-color: grey;
`;

export const Header = styled.p`
  margin-bottom: 5px;
  margin-left: 14px;
  margin-top: 297px;

  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;

  color: white;
`;

export const ContainerInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 10px;
  margin-left: 14px;

  color: white;
`;

export const ContainerLi = styled.li`
  width: 170px;
`;

export const ContainerLiSold = styled.li`
  width: 156px;
`;
