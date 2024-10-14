import React from 'react'

const nota = (props) => {
  return (
    <div>
        <legend>Informe a Nota: {props.num}</legend>
        <input type="text" name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e.target.value)} />

    </div>
  )
}

export default nota