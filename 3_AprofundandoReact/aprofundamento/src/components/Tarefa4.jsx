import React from 'react'

const useDetail = () => {
    const pessoas = [
        {nome:"Rafael",idade:34,profissao:"Front End"},
        {nome:"Bryan",idade:9,profissao:"Front End"},
        {nome:"fulano",idade:18,profissao:"Front End"}
        
    ]
   

  return (
    <div>
         {idade >=18 ?(<div>
            <h2>voce pode tirar habilitaçao</h2>
         </div>
    ):(<div>
        <h3>{`${nome}`}voce nao tem idade para tirar habilitaçao</h3>
    </div>)}
    </div>
  )
}

export default useDetail