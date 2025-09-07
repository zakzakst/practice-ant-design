"use client";
import { useReducer, createContext, useContext } from "react";
import type { ReactNode } from "react";
import { reducer, initialState } from "./useTodoReducer";
import type { State, Action } from "./useTodoReducer";

type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContextState = createContext<Pick<TodoContextType, "state"> | undefined>(undefined);
const TodoContextDispatch = createContext<Pick<TodoContextType, "dispatch"> | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContextState.Provider value={{ state }}>
      <TodoContextDispatch.Provider value={{ dispatch }}>{children}</TodoContextDispatch.Provider>
    </TodoContextState.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoContextState);
  if (!context) {
    throw new Error("useTodoState must be used within a TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoContextDispatch);
  if (!context) {
    throw new Error("useTodoState must be used within a TodoProvider");
  }
  return context;
};
