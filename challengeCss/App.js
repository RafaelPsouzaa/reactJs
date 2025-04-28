import Interface from "./Interface"
import style from "./style.css"
import React from 'react'

const App = () => {
  const carros = [
    {id:1,marca:"BMW",modelo:"x1"},
    {id:2,marca:"Peugeot",modelo:"308"},
    {id:3,marca:"FORD",modelo:"Ranger"},


]
  return (
    
    <div>
        <h1>Desafio Css</h1>
        {carros.map((car)=>(
          <Interface key={car.id} marca={car.marca} modelo={car.modelo}/>
        ))}

    </div>
  )
}

export default App