import { useNavigate } from 'react-router-dom';
import {
  Container,
  ButtonContainer,
  ButtonLogIn,
  ButtonSign,
} from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate('/register');
  };
  const goToLoginPage = () => {
    navigate('/login');
  };
  return (
    <Container>
      <div>My Logo</div>

      <ButtonContainer>
        <ButtonLogIn type="button" onClick={goToLoginPage}>
          Log In
        </ButtonLogIn>
        <ButtonSign type="button" onClick={goToRegisterPage}>
          Sign Up
        </ButtonSign>
      </ButtonContainer>
    </Container>
  );
};
