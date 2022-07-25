import { quizInfoTypes } from "../../quiz.types";
import { Difficulty, QuizWrapper } from "./style";

interface Props {
  quizInfo?: quizInfoTypes;
  maxLength: number;
  order: number;
  onNextQuiz: () => void;
}

const QuizQuestion = ({ quizInfo,order }: Props) => {

  return (
    <>
      <QuizWrapper>
        <>
          <ul key={quizInfo?.question}>
             <h1>Q{order+1}</h1>
            <h2>{quizInfo?.question}</h2>
          </ul>
        </>
        
        <Difficulty>난이도 : {quizInfo?.difficulty}</Difficulty>

      </QuizWrapper>
    </>
  );
};

export default QuizQuestion;
