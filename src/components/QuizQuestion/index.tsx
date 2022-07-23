import { quizInfoTypes } from "../quiz.types.js";
import { Difficulty, QuizWrapper } from "./style";

interface Props {
  quizInfo?: quizInfoTypes;
  order?: number;
}

const QuizQuestion = ({ quizInfo,order }: Props) => {
  return (
    <>
      <QuizWrapper>
        <>
          <ul key={quizInfo?.question}>
            <h1>Q{order + 1}</h1>
            <h2>{quizInfo?.question}</h2>
          </ul>
        </>
        
        <Difficulty>난이도 : {quizInfo?.difficulty}</Difficulty>

      </QuizWrapper>
    </>
  );
};

export default QuizQuestion;
