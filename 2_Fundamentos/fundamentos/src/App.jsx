
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
  const [notas,setNota1]=useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})
  const handleSetNotas =(e)=>{

  }

  return (
    <div className="App">
      {/* <h1>fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression/>
      <Events/> 
      <Challenge/>
      <Dados Canal= 'Canal Lobinho' Curso='Curso de React'/>
      <Relogio/> */} 
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}/>
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}/>
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}/>
      <Nota num={4} nota={notas.nota4} setNota={handleSetNotas}/>
      <Resultado somaNotas={(parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4))/4}/>
     
 </div>
   
  );
}

export default App;
