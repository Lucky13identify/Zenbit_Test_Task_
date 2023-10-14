import { DealCard } from '../DealCard/DealCard';
import { Container, Text } from './DealsList.styled';

export const DealsList = () => {
  return (
    <Container>
      <Text>Open Deals</Text>
      <DealCard />
    </Container>
  );
};
