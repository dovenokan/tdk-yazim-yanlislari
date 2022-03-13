import { useState,useEffect } from "react"
import {default as data} from "../data/tdkData"

function Quiz() {
  const [random, setRandom] = useState(Random())
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [shuffled, setShuffled] = useState(Shuffle([random.d,random.y]))

  function Shuffle(array){
    return array.slice().sort(() => Math.random() - 0.5);
  }

  function Random() {
    let i = Math.floor(Math.random()*data.length)
    let r = data[i]
    return r
  }

  function Check(answer) {
    if (random.d===answer) {
      setCorrect(correct+1)
    }else{
      setIncorrect(incorrect+1)
    }
    console.log(shuffled,random)
    setRandom(Random())
  }

  useEffect(() => {
    setShuffled(Shuffle([random.d,random.y]))    
  }, [random])

  return (
  <div className="grid place-items-center h-80">

    <div className="score flex">
      <h3 className='bg-green-500 correct text-center px-5'>D: {correct}</h3>
      <h3 className='bg-red-500 incorrect text-center px-5'>Y: {incorrect}</h3>
    </div>
    
    <div className="question flex">
      <button onClick={()=>Check(shuffled[0])} type="button" className="qbutton py-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
        <p className='word'>{shuffled[0]}</p>
      </button>
      <button onClick={()=>Check(shuffled[1])} type="button" className="qbutton py-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
        <p className='word'>{shuffled[1]}</p>
      </button>
    </div>
  </div>
)
}

export default Quiz