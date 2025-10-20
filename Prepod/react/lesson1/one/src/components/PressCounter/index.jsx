import { useCounter } from "../../hooks/useCounter";


export const PressCounter = () => {
  const {decrement, increment, counter} = useCounter(100, 10);
  
  return (
    <div>
      <h2>Прес качат</h2>
      <button onClick={decrement}>-</button>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
