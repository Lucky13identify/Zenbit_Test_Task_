import styled from 'styled-components';

export const Container = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 500px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  max-width: 350px;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;
`;

export const Input = styled.input`
  justify-content: center;
  align-items: center;
  padding: 14px 20px 12px 20px;

  border-radius: 5px;

  border-color: transparent;
  background-color: #e0e0e0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Header = styled.p`
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;

  color: #172234;
`;

export const Button = styled.button`
  width: 350px;
  height: 44px;
  margin-top: 30px;

  border: none;
  border-radius: 5px;

  text-align: center;
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  line-height: 1.37;

  color: white;
  background-color: #b29f7e;

  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  margin-left: 240px;
  margin-top: 10px;

  text-decoration: none;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;

  color: #b29f7e;
`;

export const HaveAcc = styled.p`
  margin-top: 10px;
  margin-left: 86px;

  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;

  color: #172234;
`;

export const SignUp = styled.a`
  text-decoration: none;
  color: #b29f7e;
`;
