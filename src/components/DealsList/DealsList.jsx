import { useSelector } from 'react-redux';
import { DealCard } from '../DealCard/DealCard';
import { Container, Text, ContainerUl } from './DealsList.styled';

export const DealsList = () => {
  const deals = useSelector(state => state.deals.deals);

  return (
    <Container>
      <Text>Open Deals</Text>
      <ContainerUl>
        {deals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </ContainerUl>
    </Container>
  );
};
