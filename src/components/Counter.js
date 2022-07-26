import React, { useState } from 'react';
import './Counter.css';


export default () => {
    const [count, setCount] = useState(0);


    return (
        <div className = 'Counter_style'>
            <p>Este contador USA useState</p>
            <p>Você clicou {count} vezes.</p>
            <button onClick={ () => setCount(count + 1) }>
                Clique aqui!
            </button>
        </div>
    )

}