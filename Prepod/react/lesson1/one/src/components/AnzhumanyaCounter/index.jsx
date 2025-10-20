import { useCounter } from "../../hooks/useCounter";

export const AnzhumanyaCounter = () => {
  const {decrement, increment, counter} = useCounter(10, 1);


  return (
    <header>
      <h5>Анжуманя</h5>
      <button onClick={decrement}>-</button>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
    </header>
  );
};
