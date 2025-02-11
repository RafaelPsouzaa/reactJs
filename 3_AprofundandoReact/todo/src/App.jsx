import {useState}  from 'react'
import './App.css'
import ToDo from './components/ToDo';
import TodoForm from './components/TodoForm';
import Seach from './components/Seach';
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

    const [search,setSearch] = useState("");

    const addTodo =(text,category) =>{
      const newTodos = [
        ...toDos,
        {
        id:Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted:false, 
      }]
      setToDos(newTodos);
    };

    const removeTodo = (id )=> {
      const newTodos = [...toDos]
      const filteredTodos = newTodos.filter((ToDo)=> ToDo.id !== id ? ToDo : null);
      setToDos(filteredTodos);
        }
        const completeTodo = (id) => {
          const newTodos = [...toDos]
          newTodos.map((ToDo) => ToDo.id === id ? ToDo.isCompleted = !ToDo.isCompleted:ToDo);
          setToDos(newTodos);
        }

  return (
    <div className='app'>
      <h1>Listas de Tarefas</h1>
      <Seach search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {toDos.filter((elemTodos)=>elemTodos.text.toLowerCase().includes(search.toLowerCase())).map((elemTodos)=>(//estudar essa parte
          <ToDo key={elemTodos.id} propstodo={elemTodos} removeTodo={removeTodo} completeTodo={completeTodo}   /> //componente ToDo esta recebendo a propriedade propstodo dos elementos do array toDOS
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
// https://www.youtube.com/watch?v=YVEVrigByKY&t=1s 
export default App
