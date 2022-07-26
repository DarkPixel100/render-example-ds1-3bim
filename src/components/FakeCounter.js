import React from 'react';
import './FakeCounter.css';


export default () => {
    
    let count = 0;


    return (
        <div className = 'FakeCounter_style'>
            <p>Este contador NÃO usa useState</p>
            <p>Você clicou {count} vezes.</p>
            <button onClick={ () => count + 1 }>
                Clique aqui!
            </button>
        </div>
    )

}