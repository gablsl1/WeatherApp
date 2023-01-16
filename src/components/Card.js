import React from 'react'
import './Card.css'

function Card() {
    return (
        <div class='card-container'>

            <div>
                <span id='cidade'>Distrito Federal</span>
                <span id='pais'>Brasília, Brasil</span>
            </div>

            <div class='temperaturaInfo'>
                <span id='temperatura'>27</span>
                <span id='celsius'>°C</span>
            </div>

            <div class='climaInfo'>
                <span id='icone'>Icone</span>
                <span id='clima'>Nublado</span>
            </div>

        </div>
    )
}

export default Card