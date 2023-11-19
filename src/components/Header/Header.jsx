import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../redux/Authentication/selectors';
import { logout } from '../../redux/Authentication/AuthOperations';
import icon from '../../assets/symbol-defs.svg';
import {
  Container,
  ButtonContainer,
  ButtonLogIn,
  ButtonSign,
  Icon,
} from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(isLoggedIn);

  const goToLoginPage = () => {
    navigate('/login');
  };

  const signButtnon = e => {
    if (e.target.textContent === 'Sign Up') {
      navigate('/register');
    } else {
      dispatch(logout());
    }
  };

  return (
    <Container>
      <Icon>
        <use href={icon + '#database'}></use>
      </Icon>

      <ButtonContainer>
        {isUserLoggedIn ? (
          ''
        ) : (
          <ButtonLogIn type="button" onClick={goToLoginPage}>
            Log In
          </ButtonLogIn>
        )}

        <ButtonSign type="button" onClick={signButtnon}>
          {isUserLoggedIn ? 'Sign Out' : 'Sign Up'}
        </ButtonSign>
      </ButtonContainer>
    </Container>
  );
};
