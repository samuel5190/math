import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'
import Timer from './components/Timer'
import Question from './components/Question'

function App() {
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState('')
  const [now, setNow] = useState()
  const[secondsLeft, setSecondsLeft] = useState(60) // initial countdown timer
  
  // const symbols = ()=>{
  //   const sym = ['+', '*']
  //   const randomIndex = Math.floor(Math.random() * sym.length)
  //   return sym[randomIndex]
  // }

  // const symbol = symbols()




  const generateQuestion =() =>{
    const num1 = Math.floor(Math.random() * 50)
    const num2 = Math.floor(Math.random() * 50)
    return `${num1} + ${num2}`
  }

  console.log(generateQuestion())

  // question
  
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());

  useEffect(()=>{
    const timer = setInterval(()=>{
      if (secondsLeft > 0) {
        setSecondsLeft(prevTime => prevTime - 1)
      } else {
        clearInterval(timer);
        // alert(`game over! your score is ${score}`)
        // optional restart the game or show summary
      }
    }, 1000)

    return ()=> clearInterval(timer)
  },[secondsLeft, score] )


  const handleAnswerSubmit =()=> {
    const [num1, num2]= currentQuestion.split('+').map(str => parseInt(str.trim(), 10))
    // console.log(currentQuestion)
    const correctAnswer = num1 + num2;
    setNow(num1 + num2)
    // console.log(now)
    // console.log(correctAnswer)
    if (parseInt(answer, 10)===correctAnswer) {
      setScore(prevScore => prevScore + 1)
    }
    setCurrentQuestion(generateQuestion())
  }



  return (
    <>
      <div className='appBody'>
        <h1>Math calculation Game</h1>
        <Timer secondsLeft={secondsLeft}/>
        <Question question={currentQuestion} onSubmit={handleAnswerSubmit}/>

        <p>what is {currentQuestion}</p>


        <p>score: {score}</p>
      </div>
    </>
  )
}

export default App
