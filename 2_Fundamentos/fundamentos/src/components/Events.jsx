const Events = () => {

    const handleMyEvent = () =>{
        console.log("Ativou  o evento!");
    };
    
    return(
        <div>
            <button onClick={handleMyEvent}>  click aqui </button>
        </div>
    )
}

export default Events;