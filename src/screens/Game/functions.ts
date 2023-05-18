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
  const result = new Set(arr);
  const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let i = 0
  while (i < 7) {
    const str = random.charAt(Math.floor(Math.random() * random.length));
    if (!result.has(str)) {
      result.add(str);
      i += 1;
    }
  }
  setInteraction([...result].sort());
}

export const drawnWord = ({ subject, setWord, setLetters }: ParamsOne) => {
  const random = Math.floor(Math.random() * subject.length);
  const name = subject[random].name.split('')
  setWord({ name, desc: subject[random].desc });
  setLetters(name.map((e) => e === ' ' ? true : false));
}
