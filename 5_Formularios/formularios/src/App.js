import './App.css';
import MyFoms from './Components/MyFoms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyFoms user={{name:'Rafael',email:'marksmancicone@gmail.com'}}/>
    </div>
  );
}

export default App;
