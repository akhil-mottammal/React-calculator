import React from 'react'
import './Calculator.css'
import Display from './Display'
import Button from './Button'
function Calculator() {
    return (
        <div className="container">
            <Display/>
            
            <div>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            </div>
            <div>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            </div> <div>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            </div>
            <div>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            </div>
            
            
            
        </div>
    )
}

export default Calculator
