import './App.css';
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'

function App() {
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
    </div>
  );
}

export default App;
