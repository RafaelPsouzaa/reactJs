import React from 'react'

const ToDo = ({propstodo,removeTodo,completeTodo}) => {
  return (
    <div className="toDo" style={{textDecoration: propstodo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{propstodo.text}</p>
              <p className="category">({propstodo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={()=> completeTodo(propstodo.id)} >completar</button>
              <button className='remove' onClick={()=> removeTodo(propstodo.id)}>x</button>
            </div>
          </div>
  )
}

export default ToDo