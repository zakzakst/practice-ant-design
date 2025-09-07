type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
};

export const initialState: State = {
  todos: [
    { id: 1, text: "Learn useReducer", completed: false },
    { id: 2, text: "Master Context API", completed: false },
  ],
};

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export type Action =
  | { type: ActionTypes.ADD_TODO; text: string }
  | { type: ActionTypes.TOGGLE_TODO; id: number }
  | { type: ActionTypes.REMOVE_TODO; id: number };

export const reducer = (state: State, action: Action): State => {
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
