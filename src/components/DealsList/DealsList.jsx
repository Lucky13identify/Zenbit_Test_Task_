import { DealCard } from '../DealCard/DealCard';
import { Container, Text, ContainerUl } from './DealsList.styled';
import { useSelector } from 'react-redux';

export const DealsList = () => {
  const deals = useSelector(state => state.deals.deals);
  console.log(deals);
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
