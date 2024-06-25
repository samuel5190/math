import React, { useState } from "react";

const Question = ({question, onSubmit,}) => {

  
  

    const [answer, setAnswer] = useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(answer)
        setAnswer('')
    }


  return (
  <div>
    <p>what is {question}</p>
    <form onSubmit={handleSubmit}>
        <input type="number" value={answer} onChange={(e)=> setAnswer(e.target.value) } required />
        <button type="submit" >submit</button>
    </form>
  </div>)
};

export default Question;
