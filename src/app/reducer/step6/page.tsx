"use client";
import { useReducer, createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [
    { id: 1, text: "Learn useReducer", completed: false },
    { id: 2, text: "Master Context API", completed: false },
  ],
};

enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

type Action =
  | { type: ActionTypes.ADD_TODO; text: string }
  | { type: ActionTypes.TOGGLE_TODO; id: number }
  | { type: ActionTypes.REMOVE_TODO; id: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newTodo: Todo = {
        id: Date.now(),
        text: action.text,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    case ActionTypes.TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case ActionTypes.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      throw new Error("Unknown action type");
  }
};

type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

const TodoList = () => {
  const { state, dispatch } = useTodos();
  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.completed && <span>完了</span>}
          <span onClick={() => dispatch({ type: ActionTypes.TOGGLE_TODO, id: todo.id })}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: ActionTypes.REMOVE_TODO, id: todo.id })}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

const TodoForm = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ActionTypes.ADD_TODO, text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const Page = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default Page;
