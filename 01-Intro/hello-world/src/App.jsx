import "./App.css";
import { Comments } from "./components/Comments";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { FormHook } from "./components/FormHook";
import { Greeting } from "./components/Greeting";
import { List } from "./components/List";
import { Operation } from "./components/Operation";

export function App() {
  const people = [
    {
      name: "Tania",
      picture: "https://picsum.photos/64",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    },
    {
      name: "Jonathan",
      picture: "https://via.placeholder.com/64",
      text: "Lorem ipsum dolor, sit",
    },
  ];

  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <Counter />
      <Operation />
      <List />
      <Form />
      <FormHook />
      <h2>Greetings</h2>
      <Greeting name="Jonathan" />
      <Greeting name="Luisa" />
      <Comments people={people} />
    </div>
  );
}
