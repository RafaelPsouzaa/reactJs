import './MyForm.css'
import {useState} from 'react'

const MyFoms = ({user}) => {
  //6- controlled input
  // 3- Gerenciamento de dados
  const [name,setName] = useState(user ?user.name:'')
  const [email,setEmail] = useState(user?user.email:'')
  const [role,setRole] = useState("");

  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handlesubmit =(e)=>{
    e.prevent.default();
    console.log("Enviando formulario")
    console.log(name,email,role)
    //7 - limpar Form
    setName("");
    setEmail("");
  };
  return (
    <div>
      {/*1- criaçao de Form */}
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" placeholder="digite seu nome" onChange={handleName} value={name} />
        </div>
        {/*2 - label envolvendo o Input*/ }
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder='Digite seu Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
        </label>
        {/*9- select */}
        <label> 
          <span>Função do sistema</span>
          <select name="role" onChange={(e)=>setRole(e.target.value)} >
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>
      <input type="submit" value='enviar'  />
      </form>
    </div>
  )
}

export default MyFoms