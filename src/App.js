import { useState } from 'react';
import './App.css';
import {default as data} from "./data/tdkData"

function App() {
  const [random, setRandom] = useState(Random())
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)

  function Random() {
    let r = data[Math.floor(Math.random()*data.length)]
    return r
  }

  function Check(answer) {
    if (random.d===answer) {
      setCorrect(correct+1)
    }else{
      setIncorrect(incorrect+1)
    }
    setRandom(Random())
  }

  return (
    <div className="App">
      <h1>TDK Yazım Yanlışları</h1>

      <div className="score">
        <h3 className='correct'>D: {correct}</h3>
        <h3 className='incorrect'>Y: {incorrect}</h3>
      </div>
      
      <div className="question">
        <button onClick={()=>Check(random.y)} className='qbutton'>
          <p className='word'>{random.y}</p>
        </button>        
        <button onClick={()=>Check(random.d)} className='qbutton'>
          <p className='word'>{random.d}</p>
        </button>
      </div>

    </div>
  );
}

export default App;
