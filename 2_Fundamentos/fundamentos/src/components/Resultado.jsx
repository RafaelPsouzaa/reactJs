import React from 'react'

const Resultado = (props) => {
  return (
    <div>
        <p>Valor do Resultado: {props.somaNotas}</p>
        <p>{props.somaNotas >= 6 ? "Aprovados" : "Reprovados"}</p>

    </div>
  )
}

export default Resultado