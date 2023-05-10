import { Dispatch, SetStateAction } from 'react';

interface IWords { name: string, desc: string }

type Params = {
  subject: IWords[],
  setWord: Dispatch<SetStateAction<
    { name: string[], desc: string }
  >>,
  setLetters: Dispatch<SetStateAction<boolean[]>>
}

export const drawnWord = ({ subject, setWord, setLetters }: Params) => {
  const random = Math.floor(Math.random() * subject.length);
  const name = subject[random].name.split('')
  setWord({ name, desc: subject[random].desc });
  setLetters(name.map((_e) => false));
}