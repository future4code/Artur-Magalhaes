import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-pequeno-container">
            <h4>{props.propriedade}</h4>
        </div>
    )
}

export default CardPequeno;