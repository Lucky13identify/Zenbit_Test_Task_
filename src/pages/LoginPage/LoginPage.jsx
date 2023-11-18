import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import {
  Container,
  ImgThumb,
  FlexContainer,
  FlexContainerForm,
  RegisterHeader,
} from './LoginPage.styled';

export const LoginPage = () => {
  const reject = useSelector(state => state.auth.reject);

  if (reject) {
    Notiflix.Notify.warning('Incorrect password or email');
  }

  return (
    <>
      <RegisterHeader></RegisterHeader>{' '}
      <Container>
        <FlexContainer>
          <FlexContainerForm>
            <LoginForm />
          </FlexContainerForm>

          <ImgThumb>
            <img
              src="https://res.cloudinary.com/dici0468p/image/upload/v1700249376/deals/nochnoj_gorod_vid_sverhu_ogni_goroda_134887_1024x768_l3omdr.jpg"
              alt="City view"
            />
          </ImgThumb>
        </FlexContainer>
      </Container>
    </>
  );
};
