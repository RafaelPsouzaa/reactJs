const Challenge = () => {
    const soma = () =>{
       const soma2 = 2 +4;
        console.log(soma2);
    };

    return(
        <div>
            <div>
                <button onClick={soma}>click soma</button>
            </div>
        </div>
    )
}

export default Challenge;