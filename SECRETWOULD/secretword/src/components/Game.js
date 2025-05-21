import { useState,useRef } from 'react';
import '../components/Game.css'

const Game = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,guesses,wrongLetters,score}) => {

      const [letter,setLetter] = useState("");
      const letterInputRef = useRef(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);
        setLetter("");
        letterInputRef.current.focus();
      }

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuaçao: {score}</span>

      </p>
        <h1>Advinhe a palavra</h1>
        <h3 className='tip'>
          Dica sobre a palavra:<span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas(s). </p>
        <div className='wordContainer'>
          {letters.map((letter,i)=>(
            guessedLetters.includes(letter) ? (<span key={i} className="letter">{letter}</span>) : (<span key={i} className="blankSquare"></span>)
          ))}
        </div>
        <div className='letterContainer'>
         <form onSubmit={handleSubmit}>
           <input type='text' name='letter' maxLength="1" onChange={(e)=>setLetter(e.target.value)} value={letter} ref={letterInputRef} required></input>
          <button>Jogar!</button>
         </form>
        </div>
          <div className='wrongLetterContainer '>
          <p>Letras ja utilizadas:</p>
          {wrongLetters.map((letter,i)=>(
            <span key={i} >{letter}</span>
          ))}
          </div>



    </div>
  )
}

export default Game;