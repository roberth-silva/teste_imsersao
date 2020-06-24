import React, { useState } from 'react';

const Contador = () =>{
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h3>Numero de cliques {counter}</h3>
            <button type="button" onClick={()=>setCounter(counter + 1)}>Click</button>
        </div>
    );
}

export default Contador;