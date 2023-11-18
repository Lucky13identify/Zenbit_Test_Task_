import styled from 'styled-components';

const hover = `
  &:hover {
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: rgba(178, 159, 126, 0.6);
  }

`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 944px;
  padding-top: 297px;
`;

export const Header = styled.h1`
  margin-bottom: 10px;

  text-align: center;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.25;

  color: #ffffff;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  width: 1300px;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.48px;

  color: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;
  padding: 10px 24px;

  border-radius: 8px;
  border: 1px solid #fff;

  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;

  background-color: transparent;
  color: #ffffff;

  cursor: pointer;

  ${hover}
`;
