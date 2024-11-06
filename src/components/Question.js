import React from 'react';

const Question = ({questionData, onAnswerSelect, selectedAnswer})=>{
    return(
        <div>
           <h2>{questionData.question}</h2>
           <div>
            {['a','b','c','d'].map((option)=>(
                <label key={option}>
                    <input type="radio" value={option} checked={selectedAnswer} onChange={()=>onAnswerSelect(option)}/>
                    {questionData[option]}
                </label>
            ))}
           </div>
        </div>
    )
}

export default Question;