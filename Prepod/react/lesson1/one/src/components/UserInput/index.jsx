import { useState } from "react";
import classnames from "./index.module.css";

export function UserInput({onAddTodo}) {
   const [textFromInput, setTextFromInput] = useState('');

  const clickHanlder = () => {
    onAddTodo(textFromInput);
    setTextFromInput('');
  };

  const changeHandler = (e) => {
    setTextFromInput(e.target.value);
  };

  const onClear = () => {
    setTextFromInput('');
  };

  return (
    <div className={classnames.wrapper}>
      <input type="text" onChange={changeHandler} value={textFromInput} />
      <button onClick={clickHanlder}>OK</button>
      <button onClick={onClear}> clear input </button>
    </div>
  );
}
