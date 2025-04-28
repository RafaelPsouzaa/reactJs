import  { useState}  from 'react';
import './App.css';
import City from "./assets/city.jpg"
// import ListRender from './components/ListRender';
// import ManageData from './components/ManageData';
// import ShowUserName from './components/ShowUserName';
// import Fragment from './components/Fragment';
// import Message from './components/Message';
// import ChangeMenssageState from './components/ChangeMenssageState';
// import ConditionalRender from './components/ConditionalRender';
import UserDetails from './components/UserDetails';

function App() {

  const peoplesx =[
    {id:1,name:"Rafael",age:35,job:"Programmer"},
    {id:2,name:"Moises",age:25,job:"Programmer"},
    {id:3,name:"Bryan",age:10,job:"Programmer"},
    {id:4,name:"Tonny",age:35,job:"Programmer"},
];
  // const [message,setMessage] = useState("");

  // const handleMessage = (msg) => {
  //   setMessage(msg);
  // }



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
      {/* <ManageData/>
      <ListRender/>
      <ShowUserName name={useState}/>
      <Fragment propsFragment="teste"/>
      <Message msg={message}/>
      <ChangeMenssageState qualquerMsg = {handleMessage}/> 
      <useDetail/>
      <ConditionalRender /> */}
      {peoplesx.map((User)=>(
        <UserDetails key={User.id} name={User.name} job={User.job} age={User.age}/>
      ))}

  
    </div>
  );
}

export default App;
