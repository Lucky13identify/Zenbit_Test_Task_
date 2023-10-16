import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Zenbit_Test_Task_/register" element={<RegisterPage />} />
        <Route path="Zenbit_Test_Task_/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
