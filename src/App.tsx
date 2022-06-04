import React, { FC,useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList';
import {Todo} from './type/type'

const App:FC = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodos = {
      input,
      id : todos.length,
      checked: false
    }
    setTodos([...todos, newTodos])
    setInput("")
  }

  return (
    <div className='App'>
      <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos} onSubmit={onSubmit} />
      <TodoList todos={todos} setTodos={setTodos}  />
    </div>
  )
}

export default App
