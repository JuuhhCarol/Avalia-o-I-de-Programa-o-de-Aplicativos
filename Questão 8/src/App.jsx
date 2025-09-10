import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () { 
  const [text, setText] = useState("")

  return (
    <>
            {text.length > 0 &&
            <h4> {text}</h4>
            }
          <input type="text" placeholder="Escreva aqui..." onChange={(e) => setText(e.target.value)}></input>
    </>
  )
}

export default App
