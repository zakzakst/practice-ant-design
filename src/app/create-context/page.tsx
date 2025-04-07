import { CounterProvider } from "./context/CounterContext";
import { Counter } from "./components/Counter";

const Page = () => {
  return (
    <CounterProvider>
      <main>
        <h1>Context練習カウンター</h1>
        <Counter />
      </main>
    </CounterProvider>
  );
};

export default Page;
