import { useEffect, useState } from "react";

export default function useTimerBasedState<T>(
  numStates: number,
  delays: Array<number> | ((index: number) => number),
  states: Array<T> | ((index: number) => T)
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getDelayByIndex = Array.isArray(delays)
    ? (i: number) => delays[i]
    : delays;

  const getStateByIndex = Array.isArray(states)
    ? (i: number) => states[i]
    : states;

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      if (currentIndex < numStates) {
        setCurrentIndex(currentIndex + 1);
      }
    }, getDelayByIndex(currentIndex));

    return () => {
      if (timerId) {
        window.clearTimeout(timerId);
      }
    };
  }, [currentIndex, numStates, getDelayByIndex]);

  return getStateByIndex(currentIndex);
}
