import {
  Container,
  Label,
  Input,
  Button,
  FlexContainer,
  Header,
} from './RegisterForm.styled';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { register } from '../../redux/Authentication/AuthOperations';

export const RegisterForm = () => {
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
    // dispatch(register({ email, password }));
    // setEmail('');
    // setPassword('');
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

        <Button type="submit">Register</Button>
      </Container>
    </>
  );
};
