import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/Authentication/AuthOperations';
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

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const handleChange = e => {
    if (e.target.name === 'Email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'Password') {
      setPassword(e.target.value);
    }
  };

  const submitRegisterForm = async e => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password }));
      e.target[0].value = '';
      e.target[1].value = '';
      setEmail('');
      setPassword('');
    } catch (error) {}
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
        <Button type="submit">Login</Button>
        <HaveAcc>
          Don’t have account? <SignUp href="/register">Sign Up</SignUp>
        </HaveAcc>
      </Container>
    </>
  );
};
