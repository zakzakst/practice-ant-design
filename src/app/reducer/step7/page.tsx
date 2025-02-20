"use client";
// NOTE: API通信関連（内容はstep6と同様なのでメモのみ）
import React, {
  useReducer,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

// 1️⃣ 状態の型定義
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  todos: [],
  loading: false,
  error: null,
};

// 2️⃣ アクションの型と定数化
enum ActionTypes {
  FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
}

type Action =
  | { type: ActionTypes.FETCH_TODOS_REQUEST }
  | { type: ActionTypes.FETCH_TODOS_SUCCESS; payload: Todo[] }
  | { type: ActionTypes.FETCH_TODOS_FAILURE; payload: string };

// 3️⃣ Reducer関数
const reducer = (state: State, action: Action): State => {
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

// 4️⃣ Contextの作成
type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

// 5️⃣ Providerコンポーネント
const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 6️⃣ 非同期データフェッチ
  useEffect(() => {
    const fetchTodos = async () => {
      dispatch({ type: ActionTypes.FETCH_TODOS_REQUEST });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const data: Todo[] = await response.json();
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

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// 7️⃣ カスタムフック（Contextの利用を簡単にするため）
const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

// 8️⃣ 子コンポーネント - Todoリスト表示
const TodoList = () => {
  const { state } = useTodos();

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
};

// 9️⃣ 親コンポーネント
export default function Page() {
  return (
    <TodoProvider>
      <h1>Todo List with useReducer and Async Fetch</h1>
      <TodoList />
    </TodoProvider>
  );
}
