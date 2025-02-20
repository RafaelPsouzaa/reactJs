import {useState}  from 'react'
import './App.css'
import ToDo from './components/ToDo';
import TodoForm from './components/TodoForm';
import Seach from './components/Seach';
import Filter from './components/Filter';
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
    const [filter,setFilter]= useState("ALL");
    const [sort,setSort] = useState("ASC")

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
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {toDos
        .filter((elemTodos)=> filter === "All"?true:filter === "Completed"?elemTodos.isCompleted:!elemTodos.isCompleted)
        .filter((elemTodos)=>elemTodos.text.toLowerCase().includes(search.toLowerCase())).sort((a,b)=> sort ==='ASC'?a.text.localeCompare(b.text):b.text.localeCompare(a.text)).map((elemTodos)=>(//estudar essa parte
          <ToDo key={elemTodos.id} propstodo={elemTodos} removeTodo={removeTodo} completeTodo={completeTodo}   /> //componente ToDo esta recebendo a propriedade propstodo dos elementos do array toDOS
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
// https://www.youtube.com/watch?v=YVEVrigByKY&t=1s 
export default App
