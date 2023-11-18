import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { DealCard } from '../DealCard/DealCard';
import {
  Container,
  Text,
  ContainerUl,
  ContainerSpinener,
} from './DealsList.styled';

export const DealsList = () => {
  const deals = useSelector(state => state.deals.deals);

  return (
    <Container>
      <Text>Open Deals</Text>
      <ContainerUl>
        {deals.length !== 0 ? (
          deals.map(deal => <DealCard key={deal.id} deal={deal} />)
        ) : (
          <ContainerSpinener>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="1"
              width="50"
              visible={true}
            />
          </ContainerSpinener>
        )}
      </ContainerUl>
    </Container>
  );
};
