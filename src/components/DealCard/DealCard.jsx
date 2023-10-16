import {
  Container,
  Header,
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
            <p>{Number(numberOne).toLocaleString()} Dhs</p>
          </ContainerLi>
          <ContainerLi>
            <p>Yield {numberThree}%</p>
          </ContainerLi>
          <ContainerLiSold>
            <p>Sold {numberFive}%</p>
          </ContainerLiSold>
          <ContainerLi>
            <p>Tiket - {Number(numberTwo).toLocaleString()} Dhs </p>
          </ContainerLi>
          <ContainerLi>
            <p>Days left {numberFour} </p>
          </ContainerLi>
        </ContainerInfo>
      </div>
    </Container>
  );
};
