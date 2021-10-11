import React from 'react'
import './button.css'
function Button({symbol,clickHandler}) {
    return (
        <button onClick={()=>clickHandler(symbol)} className="button">
            {symbol}

        </button>
    )
}

export default Button
 