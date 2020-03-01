import React from 'react';
import NavBar from '../NavBar';
import QuizForm from '../QuizForm';

const AnthroQuiz = ({
  updateMacros,
  location,
}) => {
  return (
    <>
      <NavBar location={location} />
      <QuizForm updateMacros={updateMacros} />
    </>
  );
};

export default AnthroQuiz;
