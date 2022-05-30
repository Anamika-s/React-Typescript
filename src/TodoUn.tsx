import React, { useState , useRef } from 'react'

export const TodoUn = () => {
 const inputRef = useRef<HTMLInputElement>(null)

   const[todoList, setTodoList] = useState<string[]>([])
   const Addtodo = ()=>
   {
     if(inputRef.current)
     {
      const todo = inputRef.current?.value
      setTodoList([...todoList, todo])
    }
   
   }
   
  return (
    <div> 
<input type="text" name="todoText"
placeholder='Enter some text'
ref = {inputRef}
  />
<button onClick={Addtodo}> Add to Todo List </button>
 <ul>
   {
     todoList.map(item=>
      {
         return <li key={item}> {item} </li>

      })
   }
   </ul>
    </div>
  )
}
