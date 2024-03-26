//componentes
import FirstComponent from './components/FirsComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
//import style/css
import './App.css';
import Challenge from './components/Challenge';



function App() {
  return (
    <div className="App">
      <h1>fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression/>
      <Events/> 
      <Challenge/>
    </div>
   
  );
}

export default App;
