import QuestionCard from "./components/QuestionCard";
import {shuffleArray} from './utils';

export type Question = {
  category: string,
  correct_answer: string,
  difficulty : string,
  incorrect_answers: string[],
  question: string,
  type: string 

}
//creat a new type to be able tos ee the answers in the User interface when we map though
export type QuestionState = Question & { answers : string[]}


export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = 'hard',
}
export const fetchQuizQuestions = async (amount:number, diffculty : Difficulty) =>{
  const endpoint = ` https://opentdb.com/api.php?amount=${amount}&difficulty=${diffculty}&type=multiple`;
  const data = await( await fetch(endpoint)).json()  // why 2 awaits ? 1st is fetch the 2nd is to await the convertion to json

  // console.log(`data in queestion card `, data )
  return data.results.map((question : Question) => (  //implict return - object 
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }
  ))

}