import { type } from "os";

export type Question = {

}

export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = 'hard',
}
export const fetchQuizQuestions = async (amount:number, diffculty : Difficulty) =>{
  const endpoint = ` https://opentdb.com/api.php?amount=${amount}&difficulty=${diffculty}&type=multiple`;
  const data = await( await fetch(endpoint)).json()  // why 2 awaits ? 1st is fetch the 2nd is to await the convertion to json

//   console.log(`amount `, amount )
  console.log(`data in queestion card `, data )
}