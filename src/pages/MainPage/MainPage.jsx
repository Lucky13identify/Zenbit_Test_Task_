import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { DealsList } from '../../components/DealsList/DealsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeals } from '../../redux/Deals/DealsOperations';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <DealsList />
    </>
  );
};
