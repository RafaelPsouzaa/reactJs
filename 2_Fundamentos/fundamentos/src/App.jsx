
// import FirstComponent from './components/FirsComponent';
// import TemplateExpression from './components/TemplateExpression';
// import Events from './components/Events';
 import './App.css';
// import Challenge from './components/Challenge';
// import Dados from './components/dados';
// import Relogio from './components/Relogio';
import React,{ useState } from 'react';
import Nota from "./components/nota"
import Resultado from './components/Resultado';


function App() {
  const [nota1,setNota1]=useState(0)
  const [nota2,setNota2]=useState(0)
  const [nota3,setNota3]=useState(0)
  const [nota4,setNota4]=useState(0)

  


  return (
    <div className="App">
      {/* <h1>fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression/>
      <Events/> 
      <Challenge/>
      <Dados Canal= 'Canal Lobinho' Curso='Curso de React'/>
      <Relogio/> */} 
      <Nota num={1} nota={nota1} setNota={setNota1}/>
      <Nota num={2} nota={nota2} setNota={setNota2}/>
      <Nota num={3} nota={nota3} setNota={setNota3}/>
      <Nota num={4} nota={nota4} setNota={setNota4}/>
      <Resultado somaNotas={nota1+nota2+nota3+nota4}/>
     
 </div>
   
  );
}

export default App;
