import React, { useState } from 'react'

export const Todo = () => {

   const[todo, setTodo] = useState("")
   const[todoList, setTodoList] = useState<string[]>([])
   const Addtodo = ()=>
   {
   setTodoList([...todoList, todo])
   setTodo("")
  //  console.log(todoList.length)
   }
   const handleChange  = (e:React.ChangeEvent<HTMLInputElement>) => 
   {
     setTodo(e.target.value)
   }
  return (
    <div> 
<input type="text" name="todoText"
placeholder='Enter some text'
value= {todo}
onChange={handleChange}
/>
<button onClick={()=> console.log(todo)}> 
Display to do text</button>
<br></br> 
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
