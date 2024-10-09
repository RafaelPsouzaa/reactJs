import React from 'react'

const ChangeMenssageState = ({qualquerMsg}) => {
  const messages = ["oi","ola","tudo bem "]
  return (
    <div>
      <button onClick={() => qualquerMsg(messages[0])}> 1</button>
      <button onClick={() => qualquerMsg(messages[1])}> 2</button>
      <button onClick={() => qualquerMsg(messages[2])}> 3</button>
    </div>
    
  )
}

export default ChangeMenssageState;