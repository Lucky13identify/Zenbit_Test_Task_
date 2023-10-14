import {
  Container,
  Header,
  ContainerUl,
  ContainerInfo,
  ContainerLi,
  ContainerLiSold,
} from './DealCard.styled';

export const DealCard = () => {
  return (
    <ContainerUl>
      <Container>
        {/* <img src="" alt="" /> */}
        <div>
          <Header>The Marina Torch</Header>
          <ContainerInfo>
            <ContainerLi>
              <p>6 500 000 Dhs</p>
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
      <Container>
        {/* <img src="" alt="" /> */}
        <Header>The Marina Torch</Header>
        <ul>
          <li>
            <p>6 500 000 Dhs</p>
          </li>
          <li>
            <p>Tiket - 60 000 Dhs</p>
          </li>
          <li>
            <p>Yield 9.25%</p>
          </li>
          <li>
            <p>Days left 150 </p>
          </li>
          <li>
            <p>Sold 75%</p>
          </li>
        </ul>
      </Container>
      <Container>
        {/* <img src="" alt="" /> */}
        <Header>The Marina Torch</Header>
        <ul>
          <li>
            <p>6 500 000 Dhs</p>
          </li>
          <li>
            <p>Tiket - 60 000 Dhs</p>
          </li>
          <li>
            <p>Yield 9.25%</p>
          </li>
          <li>
            <p>Days left 150 </p>
          </li>
          <li>
            <p>Sold 75%</p>
          </li>
        </ul>
      </Container>
      <Container>
        {/* <img src="" alt="" /> */}
        <Header>The Marina Torch</Header>
        <ul>
          <li>
            <p>6 500 000 Dhs</p>
          </li>
          <li>
            <p>Tiket - 60 000 Dhs</p>
          </li>
          <li>
            <p>Yield 9.25%</p>
          </li>
          <li>
            <p>Days left 150 </p>
          </li>
          <li>
            <p>Sold 75%</p>
          </li>
        </ul>
      </Container>
    </ContainerUl>
  );
};
