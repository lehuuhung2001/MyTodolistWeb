import React, { useState } from 'react'
import './Todo.css'
export default function Todo() {
  const [todo,Setdoto] = useState([])
  return (
    <div className='list'>
        <div className='element'>
            {/* <span>Todo1</span>
            <span className='delete'>X</span> */}
            {todo.map((data,index) => (
                <span key={index}>{todo}</span>
            ))}
        </div>
    </div>
  )
}