import {
  Container,
  Label,
  Input,
  Button,
  FlexContainer,
  Header,
  ForgotPassword,
  HaveAcc,
  SignUp,
} from './LoginForm.styled';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { login } from '../../redux/Authentication/AuthOperations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'Email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'Password') {
      setPassword(e.target.value);
    }
  };

  const submitRegisterForm = e => {
    e.preventDefault();
    console.log(email, password);
    // dispatch(login({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <>
      <Container onSubmit={submitRegisterForm}>
        <Header>Login</Header>
        <FlexContainer>
          <Label htmlFor="Email">
            Email
            <Input
              onChange={handleChange}
              id="Email"
              name="Email"
              type="text"
              placeholder="Email"
            />
          </Label>
          <Label htmlFor="Password">
            Password
            <Input
              onChange={handleChange}
              id="Password"
              name="Password"
              type="text"
              placeholder="Password"
            />
          </Label>
        </FlexContainer>
        <ForgotPassword href="">Forgot password?</ForgotPassword>
        <Button type="submit">Register</Button>
        <HaveAcc>
          Don’t have account? <SignUp href="/register">Sign Up</SignUp>
        </HaveAcc>
      </Container>
    </>
  );
};
