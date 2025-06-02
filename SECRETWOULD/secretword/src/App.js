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
const guessesQty = 3;
function App() {
  const [gameStage,setGameStage] = useState(stages[0].name);
  const [words]=useState(wordsList)

  const[pickedWord,setPickedWord] = useState("");
  const[pickedCategory,setPickedCategory] = useState("");

  const[letters,setLetters] = useState([])
  const [guessedLetters,setGuessedLetters]=useState([]);
  const [wrongLetters,setWrongLetters] = useState([]);
  const[guesses,setGuesses] = useState(guessesQty );
  const[score,setScore] = useState(50);


 

  const pickwordAndCategory = useCallback(() => {
    //Picky a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random()* Object.keys(categories).length)]
    console.log(category)

    //pick a random word 
    const word = words[category][Math.floor(Math.random()* words[category].length)]
    console.log(word)
    return{word,category}
  },[words]);
  


  //start of game 
  const startGame = useCallback(()=>{
      setGameStage(stages[1].name)
    //reset all stages
      clearLetterStates()
     
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

  },[pickwordAndCategory]);

  //process the letter input 
  const verifyLetter = (letter) =>{
   const normalizedLetter =letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter)|| wrongLetters.includes(normalizedLetter)){
      return;
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
        setGuessedLetters((actualGuessedLetters)=>[
          ...actualGuessedLetters,letter
        ])
    }else{
      setWrongLetters((actualWrongLetters)=>[
          ...actualWrongLetters,normalizedLetter
          ])

          setGuesses((actualGuesses)=> actualGuesses -1)
        }
        
      };
      
        //restart the Game 
      const retry = () => {
        setScore(0);
        setGuesses(guessesQty );
        setGameStage(stages[0].name)
      }
      const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([])
      }
      
      //check if guesses ended 
      useEffect(()=>{
    if(guesses<=0){
      //reset all stages
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  },[guesses])

  // checked win conditions
  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      //and score
      setScore((actualScore) => actualScore += 100)

      //restar game 
      startGame();

    }

  },[guessedLetters,letters,startGame])

  //rafael


  return (
    <div className="App">
    {gameStage === "start" && <StartScreen startGame={startGame} />}
    { gameStage === "game" && 
    <Game verifyLetter={verifyLetter}
     pickedWord={pickedWord}
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters}
      guesses={guesses}
       score={score}/>}
    {gameStage === 'end'&& <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
