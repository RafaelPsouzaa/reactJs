import { useState } from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData);
    const[number,setNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=>someData = 15}>mudar variavel</button>
        </div>
        <div>
          <p>valor: {number}</p>
          <button onClick={()=>setNumber(25)}> mudar state</button>
        </div>

    </div>
  )
}

export default ManageData;