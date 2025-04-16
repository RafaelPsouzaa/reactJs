import React from 'react'

const UserDetails = ({name,job,age}) => {
    
  return (
    <div>
        <h2>Nome:{name}</h2>
        <p>job:{job}</p>
        <p>Age:{age}</p>
        {age >=18 ?(<p>pode tirar habilitaçao</p>):(<p>Não pode tirar habilitação</p>)}
    </div>
  )
}

export default UserDetails