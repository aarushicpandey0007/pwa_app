import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import 'react-alice-carousel/lib/alice-carousel.css';
import QuestionPage from "./pages/QuestionPage";
const App = () => {
  return (
    <div>
    <HomePage/>
      <QuestionPage />
    </div>
  );
};

export default App;
