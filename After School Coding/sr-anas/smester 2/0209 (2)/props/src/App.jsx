import { useState } from "react"

import Card from "./components/Card"

const containerStyle = {
  width: '200px',
  margin : '0px auto',
  padding : '10px',
  textAlign : 'center',
}

const darkStyle = {
  backgroundColor : 'black',
  color : 'white',
}

const lightStyle = {
  backgroundColor : 'white',
  color : 'black',
}

export default function App() {
  const [dark, setDark] = useState(false);

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const handleIncrementNumberOne = () => {
    setNumberOne(prev => prev + 1);
  };

  const handleDark = () => {
    setDark(prev => !prev);
  }

  const handleIncrementNumberTwo = () => {
    setNumberTwo(prev => prev + 1);
  };

  return (
    <>
      <div style={dark ? darkStyle : lightStyle}>
        <button onClick={handleDark}>{ dark ? "🌙" : "☀️"}</button>
        <div style={containerStyle}>
          <h1>Simple Flash Card</h1>
          <Card name="Andi" number={numberOne}/>
          <Card name="Budi" number={numberTwo}/>
        </div>

        <div style={containerStyle}>
          <button onClick={handleIncrementNumberOne}>+</button>
          <button onClick={handleIncrementNumberTwo}>+</button>
        </div>
      </div>
    </>
  )
}