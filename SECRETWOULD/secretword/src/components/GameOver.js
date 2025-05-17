import '../components/GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <h1>RESTART</h1>
        <button onClick={retry}>Finalizar Jogo </button>
      </div>
  )
}

export default GameOver