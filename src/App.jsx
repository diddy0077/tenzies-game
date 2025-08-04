import Die from "./Components/Die"
import { nanoid } from "nanoid"
import { useState } from "react";
import Confetti from 'react-confetti'

function App() {
  function allNewDice() {
    const arrayOfNumbers = []
    for (let i = 0; i < 10; i++) {
      const randomNumbers = {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      };
      arrayOfNumbers.push(randomNumbers)
    }
    return arrayOfNumbers
  }

  
  
  
  
  const [dice, setDice] = useState(()=> allNewDice())
  const gameWon = dice.every((die) => {
    return die.isHeld
  }) && dice.every((die) => {
    return dice[0].value === die.value
  })
console.log(gameWon)

  const diceElements = dice.map((d) => {
    return <Die id={d.id} onClick={flip} key={d.id} value={d.value} isHeld={d.isHeld} />
  })
  
   function flip(id) {
     setDice((prev) => {
       return prev.map((p) => {
         return p.id === id ? {
           ...p,
           isHeld: !p.isHeld
          } : p
        })
      })
   }
  function generateNew() {
    setDice((prev) => {
      return prev.map((p) => {
        return !p.isHeld ? {
          ...p,
          value: Math.floor(Math.random() * 6) + 1
       } : p
     })
    })
  }
  
  function newGame() {
    setDice(allNewDice())
  }
 


  return (
    <div className="bg-bg h-screen p-6">
      <main className="bg-gray-50 h-full w-full rounded-[1rem] flex items-center justify-center flex-col gap-[2rem]">
        <h1 className="title font-bold text-4xl">Tenzies</h1>
          {gameWon && <Confetti/>}
            <p className="instructions text-medium text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 place-items-center gap-10">
          {diceElements}
        </div>
        {gameWon ? <button onClick={newGame} className="bg-blue-600 font-semibold cursor-pointer active:scale-[0.95] transition duration-300 text-white p-2 px-6 rounded-[10px]">New Game</button> :
        <button onClick={generateNew} className="bg-blue-600 font-semibold cursor-pointer active:scale-[0.95] transition duration-300 text-white p-2 px-6 rounded-[10px]">Roll</button>}
       </main>
    </div>
  )
}

export default App