import { Dispatch, SetStateAction } from 'react';

interface IWords { name: string, desc: string }

type Params = {
  subject: IWords[],
  setWord: Dispatch<SetStateAction<
    { name: string, desc: string }
  >>
}

export const drawnWord = ({ subject, setWord }: Params) => {
  const random = Math.floor(Math.random() * subject.length);
  setWord(subject[random]);
}