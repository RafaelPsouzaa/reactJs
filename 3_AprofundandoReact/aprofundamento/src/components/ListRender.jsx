import {useState} from 'react'

const ListRender = () => {
    const[List] = useState(["Matheus","Pedro","Rafael"]);



    const[users,setUsers] = useState([
      {id:1, name:"Rafael" ,age:33},
      {id:2, name:"Bryan", age:9},
      {id:3, name:"Vinicius", age:9}
    ])


    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        return prevUsers.filter((user) =>randomNumber !== user.id);  
      });
    }

  return (
    <div>
        <ul>
            {List.map((itensDoArray,i)=> (
                <li key={i}>{itensDoArray}</li>
            
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
              </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>delete random</button>
    </div>
  );
}

export default ListRender