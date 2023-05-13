// import { GestureResponderEvent } from "react-native/types";
import { Dispatch, SetStateAction } from "react";

type StateOne = Dispatch<SetStateAction<boolean[]>>
type StateTwo = Dispatch<SetStateAction<string[]>>

export const search = (
  value: string,
  setLetters: StateOne,
  word: string[],
  setInteraction: StateTwo,
) => {
  word.forEach((e, i) => {
    if (e == value) {
      setLetters((prevState) => {
        const result = prevState;
        result[i] = true;
        return result
      })
    }
  });
  setInteraction((prevState) => {
    const result = prevState.filter((e) => e != value);
    return result;
  })
};