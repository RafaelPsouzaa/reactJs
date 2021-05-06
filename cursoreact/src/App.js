import React,{useState,useEffect} from 'react';

function App() {
  const[contagem,setContagem] = useState(0);
  useEffect(()=>{document.title = "contagem"+contagem},[contagem]);

  function aumentarAction(){
    setContagem(contagem+ 1);
  }

  return (
    <div >
      <h1>Contagem:{contagem}</h1>
      <button onClick={aumentarAction}>Aumentar Numero</button>
    </div>
  );
}

export default App;
