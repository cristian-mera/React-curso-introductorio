import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoSearch } from "./components/TodoSearch";

// import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'llorar por la cebolla', completed: false },
  { text: 'llorar por la cebolla', completed: true },

]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >=1 ){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }
  

  return (
    <React.Fragment>

      <TodoCounter 
      total = {totalTodos}
      completed={completedTodos}
      />

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
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
