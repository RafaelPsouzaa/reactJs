import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);
  return (
    <div>
        <h1> issso sera exibido</h1>
        {x && <p>si X for TRUE,sim</p>} 
        {!x && <p>si X for false,sim</p>} 
    </div>
  )
}

export default ConditionalRender