import React,{useState,useEffect} from "react";
import axios from 'axios';
import Question from "./Question";
import Result from "./Result";

const Quiz = ()=>{

    const [questions,setQuestions] = useState([]);
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSeleectedAnswers] = useState([]);
    const [isSubmitted,setIsSubmitted] = useState(false);

    const fetchQuestions = async()=>{
        try{
           const res = await axios.get('https://dummyjson.com/c/3cbd-1cdb-462a-a286')
           console.log(res.data.question);
           setQuestions(res.data)
        }catch(err){
           console.log(err);
        }
        
    }

    useEffect(()=>{
        fetchQuestions()
    },[])

    console.log(questions);

    const handleAnswerSelect = (answer)=>{
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        setSeleectedAnswers(updatedAnswers);
    }

    const handleNextOrSubmit = () =>{
        if(currentQuestionIndex < questions.length - 1){
            setCurrentQuestionIndex((prev)=>prev + 1);
        }else{
            setIsSubmitted(true);
        }
    }

    const calculateScore = ()=>{
        return questions.reduce((score,question,index)=>{
           return score + (selectedAnswers[index] === question.correct ? 1 : 0);
        },0)
    };
    

    return(
        <div>
           {!isSubmitted ?(
            questions.length > 0 && (
                <>
                <Question questionData={questions[currentQuestionIndex]} onAnswerSelect={handleAnswerSelect} selectedAnswer={selectedAnswers[currentQuestionIndex]}/>
                <div>
                    <button onClick={handleNextOrSubmit}>{currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}</button>
                </div>
                </>
            )
           ) : (
             <Result questions={questions} selectedAnswer={selectedAnswers} score={calculateScore()}/>
           )

           }
        </div>
    )
}

export default Quiz;