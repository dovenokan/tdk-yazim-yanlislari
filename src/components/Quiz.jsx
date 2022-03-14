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
  <div className="Quiz">
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
        <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/T%C3%BCrk_Dil_Kurumu_logo.png" className="w-12" alt="" />
          <div className="text-white text-base flex">
            <h3 className='bg-green-500 correct text-center px-5'>D: {correct}</h3>
            <h3 className='bg-red-500 incorrect text-center px-5'>Y: {incorrect}</h3>
          </div>
          <div className="question flex">
            <button onClick={()=>Check(shuffled[0])} type="button" className="qbutton py-3 bg-blue-600 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              <p className='word'>{shuffled[0]}</p>
            </button>
            <button onClick={()=>Check(shuffled[1])} type="button" className="qbutton py-3 bg-blue-600 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              <p className='word'>{shuffled[1]}</p>
            </button>
          </div> 
        </div>
      </div>
    </div>
  </div>
)
}

export default Quiz