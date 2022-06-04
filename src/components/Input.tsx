import React, { FC } from 'react'
import { Todo } from '../type/type'

interface Props {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}



const Input: FC<Props> = ({ input, setInput, todos, setTodos, onSubmit }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }



  return (
    <div className='input'>
      <div>TodoList</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder='Text를 입력하세요' value={input} onChange={(e) => handleChange(e)} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  )
}

export default Input
