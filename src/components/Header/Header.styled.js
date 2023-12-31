import styled from 'styled-components';

const commonStylesButton = ` 
  width: 160px;
  padding: 11px 0px;
  border-radius: 5px;

  cursor:pointer;

  font-family: Merriweather;
  font-size: 16px;
  line-height: 1.4;`;

const hover = `
  &:hover {
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: rgba(178, 159, 126, 0.6);
  }

`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  padding-left: 80px;
  padding-right: 80px;

  background-color: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonLogIn = styled.button`
  ${commonStylesButton}
  color: #B29F7E;
  border: 1px solid #b29f7e;
  background-color: transparent;

  ${hover}
`;

export const ButtonSign = styled.button`
  ${commonStylesButton}
  color: #ffffff;
  border: none;
  background-color: #b29f7e;

  ${hover}
`;

export const User = styled.p`
  color: #ffffff;
  font-weight: bold;
`;

export const Icon = styled.svg`
  fill: #b29f7e;
  width: 50px;
`;
