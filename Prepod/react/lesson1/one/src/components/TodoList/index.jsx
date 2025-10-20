import { TodoItem } from "./TodoItem";
import cn from "./index.module.css";

export const TodoList = ({
  todos,
  deleteTodo,
  switchEdit,
  todoTextChanged,
}) => {
  return (
    <ol className={cn.wrapper}>
      {todos.map(({ id, ...props }) => {
        return (
          <TodoItem
            {...props}
            onDeleteTodo={deleteTodo}
            switchEdit={switchEdit}
            changeTodoText={todoTextChanged}
            id={id}
            key={id}
          />
        );
      })}
    </ol>
  );
};
