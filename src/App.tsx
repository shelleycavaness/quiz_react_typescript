import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
//comp0onents
import QuestionCard from './components/QuestionCard';

//Types
import {Difficulty} from './API';

const TOTAL_QUESTIONS =10;

function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log('fetch quizz :>> ', fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () =>{}
  // the type of event is a mouse event with a button
  const checkAnswers = (e:  React.MouseEvent<HTMLButtonElement>) =>{};
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1> REACT quiz</h1>
      <button className='start'  onClick={startTrivia} >start</button>
      <p className='score'>Score :</p>
      <p>loading questions...</p>

      {/* <QuestionCard 
        questionNr={number  + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers }
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswers}
      />  */}
      <button className='next' onClick={nextQuestion}>next question</button>

    </div>
  );
}

export default App;
