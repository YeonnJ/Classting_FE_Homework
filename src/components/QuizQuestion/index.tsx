import { useState } from "react";
import { quizInfoTypes } from "./quiz.types";
import { QuizWrapper } from "./style";

interface Props {
  quizInfo?: quizInfoTypes;
  maxLength: number;
  order: number;
  onNextQuiz: () => void;
}

const QuizQuestion = ({ quizInfo, order, maxLength, onNextQuiz }: Props) => {
  return (
    <>
      <QuizWrapper>
        <>
          <ul key={quizInfo?.question}>
            <p>{quizInfo?.difficulty}</p>
            <p>{quizInfo?.question}</p>
          </ul>
        </>
        {order === maxLength ? (
          <button onClick={onNextQuiz}>{"처음으로"}</button>
        ) : (
          <button onClick={onNextQuiz}>{"다음문제"}</button>
        )}
      </QuizWrapper>
    </>
  );
};

export default QuizQuestion;
