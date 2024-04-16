import { useState } from "react"

const ShowUserName = (Props) => {
    const [userName] = useState("Rafael");
  return (
    <div>
        <h2>your name printed {userName}</h2>
    </div>
  )
}

export default ShowUserName