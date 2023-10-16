import {
  Container,
  Header,
  ContainerUl,
  ContainerInfo,
  ContainerLi,
  ContainerLiSold,
} from './DealCard.styled';

export const DealCard = deal => {
  const {
    img,
    numberOne,
    numberTwo,
    numberThree,
    numberFour,
    numberFive,
    head,
  } = deal.deal;

  return (
    <Container props={img}>
      <div>
        <Header>{head}</Header>
        <ContainerInfo>
          <ContainerLi>
            <p>{numberOne} Dhs</p>
          </ContainerLi>
          <ContainerLi>
            <p>Yield 9.25%</p>
          </ContainerLi>
          <ContainerLiSold>
            <p>Sold 75%</p>
          </ContainerLiSold>
          <ContainerLi>
            <p>Tiket - 60 000 Dhs </p>
          </ContainerLi>
          <ContainerLi>
            <p>Days left 150 </p>
          </ContainerLi>
        </ContainerInfo>
      </div>
    </Container>
  );
};
