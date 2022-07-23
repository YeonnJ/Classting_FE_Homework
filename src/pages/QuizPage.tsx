import axios from "axios";
import { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { quizInfoTypes } from "../components/QuizQuestion/quiz.types";

const QuizPage = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  const [order, setOrder] = useState(0);

  const onNextQuiz = () => {
    if (order >= quizInfo.length) {
      setOrder(0);
    } else {
      setOrder(order + 1);
    }
  };

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&category=10")
      .then((res) => {
        setQuizInfo(res?.data?.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!quizInfo.length) return <div>로딩...</div>;
  return (
    <>
      <QuizQuestion
        quizInfo={quizInfo[order]}
        maxLength={quizInfo?.length}
        order={order}
        onNextQuiz={onNextQuiz}
      />
    </>
  );
};

export default QuizPage;
