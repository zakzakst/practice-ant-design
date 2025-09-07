import { useReducer, useEffect } from "react";
import { reducer, initialState, ActionTypes, Todo } from "@/models/reducer";

export const useTodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch({ type: ActionTypes.FETCH_TODOS_REQUEST });
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data: Todo[] = await res.json();
        dispatch({ type: ActionTypes.FETCH_TODOS_SUCCESS, payload: data });
      } catch {
        dispatch({
          type: ActionTypes.FETCH_TODOS_FAILURE,
          payload: "Failed to fetch todos",
        });
      }
    };
    fetchTodos();
  }, []);

  return { state, dispatch };
};
