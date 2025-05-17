import '../components/Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
        <h1>GAME</h1>
        <button onClick={verifyLetter}>Finalizar Jogo </button>
    </div>
  )
}

export default Game;