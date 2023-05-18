// import { GestureResponderEvent } from "react-native/types";
import { Dispatch, SetStateAction } from "react";

type StateOne = Dispatch<SetStateAction<boolean[]>>
type StateTwo = Dispatch<SetStateAction<string[]>>
type StateTree = Dispatch<SetStateAction<number>>

export const search = (
  value: string,
  setLetters: StateOne,
  word: string[],
  setInteraction: StateTwo,
  setResult: StateTree,
) => {
  let count = true
  word.forEach((e, i) => {
    if (e == value) {
      setLetters((prevState) => {
        const result = prevState;
        result[i] = true;
        count = false
        return result
      })
    }
  });
  if (count) setResult((prevState) => prevState += 1)
  setInteraction((prevState) => {
    const result = prevState.filter((e) => e != value);
    return result;
  })
};