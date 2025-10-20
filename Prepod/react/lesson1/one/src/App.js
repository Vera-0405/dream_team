import React, { useState, useCallback, useMemo, useEffect } from "react";
import { UserInput } from "./components/UserInput";
import { TodoList } from "./components/TodoList";
import { User } from "./components/User";

// react dev tools memo
// <> if VDOM RENDER, SPA, css-in-js, children
const App = () => {
  const [todosArr, setTodosArr] = useState([
    {
      id: Math.random().toString(),
      text: "схождить в магазин",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "заправить авто",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "помыть пол",
      isEditing: false,
    },
    {
      id: Math.random().toString(),
      text: "помыть посуду",
      isEditing: false,
    },
  ]);
  const [users, setUsers] = useState(null);
  const [state, setState] = useState({});

  const addTodo = (text) => {
    setTodosArr((prevTodosArr) => [
      ...prevTodosArr,
      {
        id: Math.random().toString(),
        isEditing: false,
        text,
      },
    ]);
  };

  const onDeleteTodo = useCallback((deleteId) => {
    setTodosArr((prevTodosArr) =>
      prevTodosArr.filter(({ id }) => deleteId !== id)
    );
  }, []);

  const switchEdit = useCallback(
    (todoId) => {
      setTodosArr((prevTodosArr) =>
        prevTodosArr.map((item) =>
          item.id === todoId ? { ...item, isEditing: !item.isEditing } : item
        )
      );
    },
    [setTodosArr]
  );  


setTimeout(() => {
  setState({});
  console.log('SET TIMEOUT');
}, 2000)

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((data) => data.json())
    //     .then((usersArr) => setUsers(usersArr));

    

     console.log("EFFECT");

    return () => { // TODO: clear func
      // console.log("CLEAR FUNC");
    };
  }, [state]);
  

    console.log('RENDER');

  const onChangeTodoText = (textInput, idChange) => {
    setTodosArr((prevTodosArr) => {
      return prevTodosArr.map((item) => {
        if (item.id === idChange) {
          return { ...item, text: textInput };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className="App">
      <button onClick={() => setState({})}>rerender</button>
      <UserInput onAddTodo={addTodo} />
      <TodoList
        todos={todosArr}
        deleteTodo={onDeleteTodo}
        switchEdit={switchEdit}
        todoTextChanged={onChangeTodoText}
      />
      {users
        ? users.map((props) => {
            return <User key={props.id} {...props} />;
          })
        : "LOADING..."}
    </div>
  );
};

export default App;
