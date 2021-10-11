import React from 'react'
import './display.css'
function Display(props) {
    return (
        <div className="display">
            <h2>{props.input}</h2>
        </div>
    )
}

export default Display
