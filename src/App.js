import "./styles.css";
import Counter from "./components/Counter";
import GetQuestion from "./components/GetQuestion";
import JeopardyAnswer from "./components/JeopardyAnswer";

export default function App() {
  return (
    <div className="App">
      <h1 className="welcome">Welcome to Jeopardy!</h1>
      <section>
        <Counter />
        <GetQuestion />
        <JeopardyAnswer />
      </section>
    </div>
  );
}
