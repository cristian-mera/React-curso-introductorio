import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoSearch } from "./components/TodoSearch";

// import './App.css';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'llorar por la cebolla', completed: false },

]

function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text} 
            text={todo.text} 
            completed />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>

  );
}

export default App;
