import React from "react";

const Timer = ({secondsLeft}) => {

    const formattedTime =(seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60
        return `${minutes} : ${secondsLeft < 10 ? '0' : ''} ${secondsLeft}`
    }
  return (
  <div>
    <p>Time left: {formattedTime(secondsLeft)}</p>
  </div>)
};

export default Timer;
