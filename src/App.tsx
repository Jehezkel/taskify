import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskInput } from './components/TaskInput';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, new Todo(todo)]);
      setTodo('');
    }
  };
  return (
    <div className='h-screen v-screen bg-sky-500'>

      <div className='pt-5 text-5xl text-white font-bold uppercase z-10  v-screen  text-center'>Taskify</div>

      <div className=' mx-auto  max-w-max mt-10'>

        <TaskInput todo={todo} setToDo={setTodo} handleAdd={handleAdd}></TaskInput>
        <div className='mt-10'>

          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>



    </div>)
}

export default App;
