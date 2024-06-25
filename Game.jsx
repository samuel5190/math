import React, { useEffect, useState } from "react";
import "./game.css";
import Page from "./Page";

// get random questions
// calculate the answer to the question
// compare the answer the user input's and the answer to the question   // easy
// if the answer is the same update score with + 1    //easy
// when the timer runs out show the play again page   // done

const Game = () => {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();
  // console.log(answer);
  const [question, setQuestion] = useState();

  // generate question



  // Function to generate a random math question
  function generateMathQuestion() {
    // Generate two random numbers between 1 and 20
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    let operation = Math.floor(Math.random() * 2)

    let question, answer;
  

    if (operation === 0) {
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
    } else {
      if (num1 > num2) {
        question = `${num1} - ${num2}`;
        answer = num1 - num2;
      } else {
        question = `${num1} - ${num2}`;
        answer = num2 - num1;
      }
    }

    // Return an object containing the question and answer
    return {
      question: question,
      answer: answer,
    };
  }

  // Example usage:
  let mathQuestion = generateMathQuestion();
  // console.log("Question:", mathQuestion.question); 
  // console.log("Answer:", mathQuestion.answer); // 
  


  // submit btn
  const handleSubmit = () => {
    if (mathQuestion.answer === answer) {
      setScore((e) => e + 1);
    }
    setQuestion(mathQuestion.question)
  };
  
  // timer
  const [secondsLeft, setSecondsLeft] = useState(60);
  const formattedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes} : ${secondsLeft < 10 ? "0" : ""} ${secondsLeft}`;
  };

  // use effect

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((e) => e - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, score]);

  return (
    <div className="gameBody">
      {/* {secondsLeft > 0 ? ( */}
      <div>
        <h1>math game</h1>
        <p>time : {formattedTime(secondsLeft)}</p>
        <div>
          <input type="number" onChange={(e) => setAnswer(e.target.value)} />
          <button onClick={handleSubmit}>submit</button>
        </div>
        <p>what is {question} </p>
        <p>score : {score}</p>
      </div>
      {/*  ) : (
         <div>
           <Page />
         </div>
       )} */}
    </div>
  );
};

export default Game;

// let minutes = 1;
// let seconds = 0;

// function startTimer() {
//     // Update the timer every second
//     let timer = setInterval(function() {

//         console.log(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
//         seconds--;

//         if (seconds < 0 && minutes > 0) {
//             minutes--;
//             seconds = 59; // Reset seconds
//         }

//         if (minutes === 0 && seconds === 0) {
//             clearInterval(timer);
//             console.log("Countdown finished!");
//         }
//     }, 1000); // Update every second (1000 milliseconds)
// }

// // Start the countdown
// startTimer();
