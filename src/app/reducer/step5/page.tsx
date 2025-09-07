"use client";
import { useReducer, createContext, useContext } from "react";
import type { ReactNode } from "react";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
};

type CounterContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

const CounterDisplay = () => {
  const { state } = useCounter();
  return <p>Count: {state.count}</p>;
};

const CounterControls = () => {
  const { dispatch } = useCounter();
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const Page = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  );
};

export default Page;
