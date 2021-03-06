import React from 'react';
type Props ={
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any; // set this to any so it doesnt compalin in the button
  questionNr: number;
  totalQuestions: number;

}


const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions})=> (
<div>
  <p className="number">
  question : {questionNr} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML= {{ __html: question }} / >
  <div>
  { answers.map( answer => (
    <div>
      <button disabled={userAnswer} onClick={callback}>
        <span dangerouslySetInnerHTML={{__html: answer}} />
      </button>
    </div>
  ))}
  </div>

</div>
)

export default QuestionCard