import { useCounter } from "../../hooks/useCounter";

export const Begit = () => {
  const { decrement, increment, counter } = useCounter(100, 10);

  return (
    <section>
      <h3>Крос бегит</h3>
      <button onClick={decrement}>-</button>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
    </section>
  );
};
