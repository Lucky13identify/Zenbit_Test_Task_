import styled from 'styled-components';

export const ContainerUl = styled.ul`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;

  gap: 20px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 1280px;

  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.h2`
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;

  color: #b29f7e;
`;
