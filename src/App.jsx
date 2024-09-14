import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const addvalue=()=>{
  counter++;
  console.log("clicked",counter)
}

let counter=35;
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addvalue}>add value</button>
     <br />
     <button>remove value</button>
    </>
  )
}

export default App
