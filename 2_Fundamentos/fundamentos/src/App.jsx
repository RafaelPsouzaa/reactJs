import React,{useState} from 'react';
import Nota from './components/nota';
import Resultado from './components/Resultado';

function App() {
  
    const[nota1,setNota1]=useState(0);
    const[nota2,setNota2]=useState(0);
    const[nota3,setNota3]=useState(0);
    const[nota4,setNota4]=useState(0);
     return (
    <div>
      <Nota num={1} nota={nota1} setNota={setNota1}/>
      <Nota num={2} nota={nota2} setNota={setNota2}/>
      <Nota num={3} nota={nota3} setNota={setNota3}/>
      <Nota num={4} nota={nota4} setNota={setNota1}/>
      <Resultado somaNotas={nota1+nota2+nota3+nota4/4}/>
      


    </div>
   
  );
}

export default App;
