import React from 'react'
import propTypes from 'prop-types'
import './Card.css'

function Card({ data }) {

    const {
        location,
        current,
    } = data

    return (
        <div class='card-container'>

            <div>
                <span id='cidade'>{location.name}</span>
                <span id='pais'>{`${location.region}, ${location.country}`}</span>
            </div>

            <div class='temperaturaInfo'>
                <span id='temperatura'>{current.temp_c}</span>
                <span id='celsius'>°C</span>
            </div>

            <div class='climaInfo'>
                <img id='icone' src={current.condition.icon} alt=""/> 
                <span id='clima'>{current.condition.text}</span>
            </div>

        </div>
    )
}

export default Card

Card.propTypes = {
    data: propTypes.object,
}.isRequired