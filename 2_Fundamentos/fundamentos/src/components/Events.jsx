const Events = () => {

    const handleMyEvent = () =>{
        console.log("Ativou  o evento!");
    };
    
    return(
        <div>
            <div><button onClick={handleMyEvent}>  click aqui </button></div>
            <div>
                <button onClick={() => console.log("clicou!")}>
                    clique aqui tambem
                    </button>
            </div>
        </div>
        
    )
}

export default Events;