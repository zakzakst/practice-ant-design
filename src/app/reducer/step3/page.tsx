"use client";
import { useReducer } from "react";

type State = {
  count: number;
  step: number;
  loading: boolean;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "setStep"; payload: number }
  | { type: "startLoading" }
  | { type: "endLoading" };

const initialState: State = { count: 0, step: 1, loading: false };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "setStep":
      return { ...state, step: action.payload };
    case "startLoading":
      return { ...state, loading: true };
    case "endLoading":
      return { ...state, loading: false };
    default:
      throw new Error("Unknown action type");
  }
};

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const asyncIncrement = () => {
    dispatch({ type: "startLoading" });
    setTimeout(() => {
      dispatch({ type: "increment" });
      dispatch({ type: "endLoading" });
    }, 1000);
  };
  return (
    <div>
      <p>Count: {state.count}</p>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "setStep", payload: Number(e.target.value) })}
      />
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={asyncIncrement} disabled={state.loading}>
          {state.loading ? "Loading..." : "Async Increment"}
        </button>
      </div>
    </div>
  );
};

export default Page;
