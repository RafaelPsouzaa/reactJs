import React from 'react'

const ToDo = ({propstodo,removeTodo}) => {
  return (
    <div className="toDo">
            <div className="content">
              <p>{propstodo.text}</p>
              <p className="category">({propstodo.category})</p>
            </div>
            <div>
              <button className='complete'>completar</button>
              <button className='remove' onClick={()=> removeTodo(propstodo.id)}>x</button>
            </div>
          </div>
  )
}

export default ToDo