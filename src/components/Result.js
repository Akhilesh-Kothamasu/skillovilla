import React from 'react';

const Result = ({questions,selectedAnswer,score})=>{

    return(
        <div>
            <h2>Your score : {score} / {questions.length}</h2>
            <ul>
                {questions.map((question,index)=>(
                    <li key = {index}>
                        <p>
                            {question.question}<br/>
                            <strong>your answer :</strong> {selectedAnswer[index]}<br/>
                            <strong>correct answer:</strong>{question.correct}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Result;