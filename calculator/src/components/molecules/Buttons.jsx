import React from 'react';
import {Button} from "../atoms/Button"
import "./MoleculesStyles.css"

export const Buttons = ({add, substract,multiply,divide,resetInput,resetResult}) => {
  return (
    <div className = "buttons" >
        <Button onClick={add} color = {"white"} >  add</Button>
        <Button onClick={substract} color = {"white"}> substract</Button>
        <Button onClick={multiply} color = {"white"}> multiply</Button>
        <Button onClick={divide} color = {"white"}> divide</Button>
        <Button onClick={resetInput} color = {"orange"}> resetInput</Button>
        <Button onClick={resetResult} color = {"orange"}> resetResult</Button>
    </div>
  )
}
