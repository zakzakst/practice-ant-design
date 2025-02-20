import { TodoProvider } from "./todoContext";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

const Page = () => {
  return (
    <TodoProvider>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  );
};

export default Page;
