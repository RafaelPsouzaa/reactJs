import '../components/GameOver.css'

const GameOver = ({retry,score}) => {
  return (
    <div>
          <h1>Fim de Jogo</h1>
          <h2> Sua pontuaçao foi: <span>{score}</span></h2>
        <button onClick={retry}>Finalizar Jogo </button>
    </div>
  )
}

export default GameOver