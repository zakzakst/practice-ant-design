export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

export enum ActionTypes {
  FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
}

export type Action =
  | { type: ActionTypes.FETCH_TODOS_REQUEST }
  | { type: ActionTypes.FETCH_TODOS_SUCCESS; payload: Todo[] }
  | { type: ActionTypes.FETCH_TODOS_FAILURE; payload: string };

export const initialState: State = {
  todos: [],
  loading: false,
  error: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case ActionTypes.FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};
