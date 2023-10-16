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
              src="https://s3-alpha-sig.figma.com/img/a47d/b256/b2f7ebf3957623e4989fbd343e95450f?Expires=1698019200&Signature=P4vnaZLvxxqPtoWw-CX2um5sX~SWjep01L-qMiP1y679gUsXhW9zgQpaUM4GfipFrF6eCvvOWEiqi4EN4NniNu~0XisPwnZ8H-npTuCiuWNzzWAJ4t~8DjEQ0sspkmIqzWTQzS-QxScUAl35O7g5YH8hq2-R5BK9AY6PXFtlKUec7xKRJPDGbeZ57CFiplWHb7XWc~FbDVC80wu~MUw6Y0c3bcRXFMfVvkft1CVXC5rqGHQs7hrpB7rQGWme4vwz7Vq0Sn-TN0CvavHx18ubNZJkmP2Xh8EJwWMgfa3NFXdElcAs87LfEOEtxl0F-d5CRfc7v0itr1WsCwDjXtmT9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </ImgThumb>
        </FlexContainer>
      </Container>
    </>
  );
};
