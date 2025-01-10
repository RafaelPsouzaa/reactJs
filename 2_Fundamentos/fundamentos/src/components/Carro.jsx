import React from 'react'


class Carro extends React.Component {
    constructor(props){
        super(props)
        this.modelo ='GOL'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld =this.ligarDesligar.bind(this);
        //funçao this.ld = this.ligarDesligar si liga ao this da classe Carro

    }
        ligarDesligar(){
            // this.setState({ligado:!this.state.ligado})
            this.setState(
                (state)=>(
                    {ligado: !state.ligado}
                )  
            )
        }

        acelerar(){
            this.setState(
                (state,props)=>(
                    {velAtual:state.velAtual + props.fator}
                )

            )
        }

        render(){
    
        return(
        <div>
            <h1>Meu Carro </h1>
            <p>Modelo: {this.modelo}</p>
            <p>ligado: {this.state.ligado?'sim':'nao'}</p>
            <p>Vel.Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>
                {this.state.ligado?'desligar carro':'ligar carro'}

            </button>
            <button onClick={()=>this.acelerar()}>
                acelerar

            </button>
        </div>
    )
}
}

export default Carro