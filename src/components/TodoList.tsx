import React, { FC } from 'react'
import { Todo } from '../type/type'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoList: FC<Props> = ({ todos, setTodos }) => {



  const handleChange = (id: number, input: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.input = input;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked
      }
      return todo;
    })
    setTodos(newTodos);
  }


  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) =>
      todo.id !== id
    )
    setTodos(newTodos);
  }

  return (
    <ul>
      {todos.map((index, id) => (
        <li key={id}>
          {index.checked ? (<input className="inputchecked" type="text" disabled={index.checked} value={index.input} onChange={(e) => handleChange(index.id, e.target.value)} />)
            :
          (<input className="" type="text" disabled={index.checked} value={index.input} onChange={(e) => handleChange(index.id, e.target.value)} />)}
          <input className='checkbox' value={index.input} type="checkbox" onChange={(e) => handleChecked(index.id, index.checked)} />
          <button onClick={(e) => handleDelete(index.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
