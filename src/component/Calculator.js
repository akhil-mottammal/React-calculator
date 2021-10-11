import React,{useState} from 'react'
import './Calculator.css'
import Display from './Display'
import Button from './Button'


function Calculator() {
    const[input,setInput]=useState("")
    
    const clickHandler=(symbol)=>{

        console.log("clicked")
setInput(input+symbol)
    }

    const clear=()=>{
        setInput("")
    }
    const equal=()=>{
       setInput(()=>eval(input)) 
    }
    return (
        <div className="container">
            <Display input={input}/>
            
            <div>
            <Button symbol={"7"} clickHandler={clickHandler}/>
            <Button symbol={"8"}  clickHandler={clickHandler}/>
            <Button symbol={"9"}  clickHandler={clickHandler}/>
            <Button symbol={"+"} clickHandler={clickHandler}/>
            </div>
            <div>
            <Button symbol={"4"} clickHandler={clickHandler}/>
            <Button symbol={"5"} clickHandler={clickHandler}/>
            <Button symbol={"6"} clickHandler={clickHandler}/>
            <Button symbol={"-"} clickHandler={clickHandler}/>
            </div> <div>
            <Button symbol={"1"} clickHandler={clickHandler}/>
            <Button symbol={"2"} clickHandler={clickHandler}/>
            <Button symbol={"3"} clickHandler={clickHandler}/>
            <Button symbol={"*"} clickHandler={clickHandler}/>
            </div>
            <div>
            <Button symbol={"/"}clickHandler={clickHandler}/>
            <Button symbol={"0"} clickHandler={clickHandler}/>
            <Button symbol={"."} clickHandler={clickHandler}/>
            <Button symbol={"="} clickHandler={equal}/>
            </div>
            <div className="clear" onClick={clear} >
            CLR
            </div>
            
            
            
        </div>
    )
}

export default Calculator
