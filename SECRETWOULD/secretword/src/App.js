import './App.css';
import StartScreen from './components/StartScreen';
import { useCallback,useState,useEffect } from 'react';
import { wordsList } from './DATA/words';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
]
function App() {
  const [gameStage,setGameStage] = useState(stages[0].name);
  const [words]=useState(wordsList)

  const[pickedWord,setPickedWord] = useState("");
  const[pickedCategory,setPickedCategory] = useState("");

  const[letters,setLetters] = useState([])
  const [guessedLetters,setGuessedLetters]=useState([]);
  const [wrongLetters,setWrongLetters] = useState([]);
  const[guesses,setGesses] = useState(3);
  const[score,setScore] = useState(0);


 

  const pickwordAndCategory = () => {
    //Picky a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random()* Object.keys(categories).length)]
    console.log(category)

    //pick a random word 
    const word = words[category][Math.floor(Math.random()* words[category].length)]
    console.log(word)
    return{word,category}
  }
  


  //start of game 
  const startGame = ()=>{
    setGameStage(stages[1].name)
   const{word,category} = pickwordAndCategory();
    //create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l)=> l.toLowerCase());

   console.log(word,category);
   console.log(wordLetters);
   //fill states
   setPickedWord(word);
   setPickedCategory(category);
   setLetters(wordLetters);

  }

  //process the letter input 
  const verifyLetter = (letter) =>{
    console.log(letter);
  
  }

  //restart the Game 
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
    {gameStage === "start" && <StartScreen startGame={startGame} />}
    { gameStage === "game" && 
    <Game verifyLetter={verifyLetter}
     pickedWord={pickedWord}
      pickedCategory={pickedCategory} 
      letters={letters} guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters}guesses={guesses} score={score}/>}
    {gameStage === 'end'&& <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
