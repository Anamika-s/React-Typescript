import React, { ProfilerProps } from 'react'

type ProfileProps =
{
  name? : string
  age : number
  status : 'coder' | 'tester'
  // children? : string
  children? : React.ReactNode
}
const Profile = ({name, age, status,children} :ProfileProps) => {
  return (
    <div style={{border:"2px solid", margin :"5px"}}>
      <h1>  Hello {name || "User"} </h1>
    <h2> Your Age is {age}
       Status is {status}
        {children}</h2>
    </div>
  )
}

export default  Profile;