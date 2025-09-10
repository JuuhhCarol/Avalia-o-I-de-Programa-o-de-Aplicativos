// C - Botão que ao clicar, alterna a visibilidade de um elemento entre “visível” e “não
// visível”.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () { 
  const [visibility,setvisibility] = useState(true)


  return (
    <>
    { visibility &&
      <div>
        <h2>Invisible</h2>
      </div>
    }
    <button onClick = {() => [setvisibility(visibility==true? false:true)]}>
      capa da invisibilidade 
    </button>
    </>
  )
}

export default App