import React from "react";

class Classe extends React.Component{
        constructor(props){
            super(props)
        }
    render(){
        
        return(
            <div>
                <h1>Meu Carro </h1>
                <p>Canal: {this.props.canal}</p>
            </div>
        )
    }
}

export default Classe