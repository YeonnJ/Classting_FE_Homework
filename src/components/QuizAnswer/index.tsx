import { useState } from "react";
import ResultPage from "../../pages/ResultPage";
import { quizInfoTypes } from "../../quiz.types";
import {  AnswerBtn, AnswerResult, QuizList, Red } from "./style"

interface Props {
  quizInfo?: quizInfoTypes;
  maxLength: number;
  order: number;
  onNextQuiz: () => void;
}

const QuizAnswer = ({ quizInfo, order, maxLength, onNextQuiz }: Props) => {
  const [correct, setCorrect] = useState(false)
  const [correctNum, setCorrectNum] = useState(1)
  const [isClicked, setClicked] = useState(false)

  let stCorrectNum = correctNum.toString()
  let stInCorrectNum =   (10 - (correctNum-1)).toString()

  function shuffle(arr:string[]) {
    arr.sort(() => Math.random() - 0.5);
  }
  
  let totalAnswer = [] //전체문항 목록
  let correctAnswer = quizInfo?.correct_answer //정답 
  let inCorrect_Answer = quizInfo?.incorrect_answers //오답 
  
  totalAnswer.push(correctAnswer, ...inCorrect_Answer)
  shuffle(totalAnswer);

const onClick = (e:any) => {
    const { value } = e.target;
    setClicked(true)
    
    if(value === correctAnswer) {
      setCorrect(true)
      setCorrectNum(correctNum+1)
      sessionStorage.setItem("정답수", stCorrectNum)
    }  else {
      setCorrect(false)
      sessionStorage.setItem("오답수", stInCorrectNum)
    }
};

  const goNext = () => {
    onNextQuiz();
    setClicked(false)
  }

  return (
    <>
      <QuizList>
        {isClicked &&  
          <AnswerResult>
            {correct ? <p>정답입니다 😃</p> : <Red>오답입니다 🥲</Red>}

          <button onClick={goNext}>{"다음문제"}</button>

          </AnswerResult>
        }

        {totalAnswer?.map((item) => (
          <AnswerBtn
            disabled={isClicked} 
            onClick={onClick} 
            value={item}>
            {item}
          </AnswerBtn> 
        ))}
      </QuizList>
    </>
  );
}

export default QuizAnswer;

