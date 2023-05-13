import { Dispatch, SetStateAction } from 'react';

interface IWords { name: string, desc: string }

// types
type ParamsOne = {
  subject: IWords[],
  setWord: Dispatch<SetStateAction<
    { name: string[], desc: string }
  >>,
  setLetters: Dispatch<SetStateAction<boolean[]>>
}

type ParamsTwo = {
  arr: string[],
  setInteraction: Dispatch<SetStateAction<string[]>>
}

// functions
export const randomLetters = ({ arr, setInteraction }: ParamsTwo): void => {
  const result = [...arr];
  const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 7; i += 1) {
    let string = random.charAt(Math.floor(Math.random() * random.length));
    result.push(string);
  }
  result.sort()
  setInteraction(result);
}

export const drawnWord = ({ subject, setWord, setLetters }: ParamsOne) => {
  const random = Math.floor(Math.random() * subject.length);
  const name = subject[random].name.split('')
  setWord({ name, desc: subject[random].desc });
  setLetters(name.map((e) => e === ' ' ? true : false));
}