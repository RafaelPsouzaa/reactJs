import React from "react";

export default  function Relogio(){
    return(
        <div>
            <p>
                {new Date().toLocaleTimeString()}
            </p>

        </div>
    )
}
