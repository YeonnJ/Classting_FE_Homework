import { useState } from "react";
import { quizInfoTypes } from "../quiz.types";
import {  AnswerBtn, AnswerResult, AnswerWrapper, QuizList, Red } from "./style"

interface Props {
  quizInfo?: quizInfoTypes;
  maxLength: number;
  order: number;
  onNextQuiz: () => void;
}

const QuizAnswer = ({ quizInfo, order, maxLength, onNextQuiz }: Props) => {
  const [correct, setCorrect] = useState(false)
  const [isClicked, setClicked] = useState(false)
  
  let totalAnswer = [] //전체문항 목록
  let correctAnswer = quizInfo?.correct_answer //정답 
  let inCorrect_Answer = quizInfo?.incorrect_answers //오답 
  
  totalAnswer.push(correctAnswer, ...inCorrect_Answer)

const onClick = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setClicked(true)

    if(value === correctAnswer) {
      setCorrect(true)
    }  else {
      setCorrect(false)
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
            {order === maxLength  ? (
              <button onClick={onNextQuiz}>{"처음으로"}</button>
            ) : (
              <button onClick={goNext}>{"다음문제"}</button>
            )}
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

