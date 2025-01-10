import React from "react";
export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canal:'CFB CURSOS',
            curso:'React',
            ativo:true
        }
    }
    ativarDesativar(){
        this.setState(
            state=>({

               ativo:!state.ativo
                
            })
        )
    }

    render(){
        return(
            <>
                <h1>Componente de classe</h1>
            </>
        )
    }



}

// https://www.youtube.com/watch?v=zRttpd14ci4&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=27