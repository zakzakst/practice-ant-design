"use client";
import { ActionTypes } from "./useTodoReducer";
import { useTodoState, useTodoDispatch } from "./todoContext";
export const TodoList = () => {
  const { state } = useTodoState();
  const { dispatch } = useTodoDispatch();

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id} onClick={() => dispatch({ type: ActionTypes.TOGGLE_TODO, id: todo.id })}>
          {todo.text} {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
};
