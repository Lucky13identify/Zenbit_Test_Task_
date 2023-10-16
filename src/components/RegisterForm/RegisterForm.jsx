import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/Authentication/AuthOperations';
import Notiflix from 'notiflix';
import {
  Container,
  Label,
  Input,
  Button,
  FlexContainer,
  Header,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

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
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      Notiflix.Notify.warning('Invalid');
      return;
    }
    try {
      await dispatch(register({ email, password }));
      e.target[0].value = '';
      e.target[1].value = '';
      setEmail('');
      setPassword('');
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <Container onSubmit={submitRegisterForm}>
        <Header>Register</Header>
        <FlexContainer>
          <Label htmlFor="Email">
            Email
            <Input
              onChange={handleChange}
              id="Email"
              name="Email"
              type="text"
              placeholder="Email"
              required
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
              required
            />
          </Label>
        </FlexContainer>

        <Button type="submit">Register</Button>
      </Container>
    </>
  );
};
