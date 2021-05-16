import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import SeachBox from './components/SeachBox';



function App(){
    return(
        <div>
            <h1>Listas de Tarefas</h1>
            <SeachBox frasePadrao = "faca sua busca.."/><br/>
            
        </div>
    );
}

export default App;