import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { DealsList } from '../../components/DealsList/DealsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchDeals } from '../../redux/operations';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('fetchDeals');
    // dispatch(fetchDeals());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <DealsList />
    </>
  );
};
