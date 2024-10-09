import  { useState}  from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Message from './components/Message';
import ChangeMenssageState from './components/ChangeMenssageState';

function App() {


  const [message,setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }



  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* imagem public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* imagem em assets */}
        <img src= {City} alt="cidade" />
        
      </div>
      <ManageData/>
      <ListRender/>
      <ShowUserName name={useState}/>
      {/*fragment */}
      <Fragment/>
      <Message msg={message}/>
      <ChangeMenssageState qualquerMsg = {handleMessage}/> 
      <useDetail/>


    </div>
  );
}

export default App;
