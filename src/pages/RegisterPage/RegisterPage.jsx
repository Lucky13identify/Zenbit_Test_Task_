import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  Container,
  ImgThumb,
  FlexContainer,
  FlexContainerForm,
  RegisterHeader,
} from './RegisterPage.styled';

export const RegisterPage = () => {
  const reject = useSelector(state => state.auth.reject);

  if (reject) {
    Notiflix.Notify.warning('User with this email already exists.');
  }
  return (
    <>
      <RegisterHeader></RegisterHeader>
      <Container>
        <FlexContainer>
          <FlexContainerForm>
            <RegisterForm />
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
