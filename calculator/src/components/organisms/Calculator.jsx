import Text from "../atoms/Text"
import { Input } from "../atoms/Input"
import { Buttons } from "../molecules/Buttons"
import "./CalculatorStyles.css"
import { useState } from "react"

export default function Calculator() {
  const [inputNumber, setInputNumber] = useState(0)
  const [total, setTotal] = useState(0)

  function handleChange(event){
    setInputNumber(Number(event.target.value))
  }

  function add(){
    setTotal(total + inputNumber);
  }
  
  function subtract(){
    setTotal(total - inputNumber);
  }
  function multiply(){
    setTotal(total * inputNumber);
  }
  function divide(){
    if(inputNumber !== 0) {
      setTotal(total / inputNumber);
    }
  }
  function resetInput(){
    setInputNumber(0)
  }
  function resetResult(){
    setTotal(0);
  }


  return (
  <div className="calculator">
    <Text value={"Calculator"}/>
    <Input placeholder="Type a number" type="number" id={1} onChange={handleChange} value={inputNumber} style={""}/>
    <h2>Result: {total}</h2>
    <Buttons add={add} substract={subtract} multiply={multiply} divide={divide} resetInput={resetInput} resetResult={resetResult} />
  </div>
  )
}