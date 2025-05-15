import './App.css';
import StartScreen from './components/StartScreen';
import { useCallback,useState,useEffect } from 'react';
import { wordsList } from './DATA/words';
import Game from './components/Game';

const stages =[
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
]
function App() {
  const [gameStage,setStage] = useState(stages[0].name);
  const [words]=useState(wordsList)
  console.log(words);
  return (
    <div className="App">
    {gameStage === "start" && <StartScreen />}
   { gameStage === "game" && <Game/>}

   {gameStage === 'end'&& <gameOver/>}
    </div>
  );
}

export default App;
