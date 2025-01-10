import {useState}  from 'react'

function App() {
  const [toDos,setToDos] = useState([{
    id:1,
    text: "criar funcionalidade x no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text: "Ir pra academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,
  }]);

  return (
    <div className='app'>
      <h1>Listas de Tarefas</h1>
      <div className="todo-list">
        {toDos.map((toDo)=>(
          <div className="toDo">
            <div className="content">
              <p>{toDo.text}</p>
              <p className="category">({toDo.category})</p>
            </div>
            <div>
              <button>completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
