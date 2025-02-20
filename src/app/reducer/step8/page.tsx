import { useTodoReducer } from "@/hooks/useTodoReducer";

const TodoList = () => {
  const { state } = useTodoReducer();
  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "完了" : "要対応"}
        </li>
      ))}
    </ul>
  );
};

const Page = () => {
  return (
    <div>
      <h1>Todo List with Custom Hook and useReducer</h1>
      <TodoList />
    </div>
  );
};

export default Page;
