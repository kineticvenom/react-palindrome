import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import OutputLabel from './OutputLabel'



function App() {
  const [userInput, setUserInput] = useState('')
  


    return (
      <div>
        <input value={userInput} name="userInput" onChange={e => setUserInput(e.target.value)} />
        <OutputLabel value ={userInput}/>
      </div>
    );
  
}




export default App
