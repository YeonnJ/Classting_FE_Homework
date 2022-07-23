import axios from "axios";
import { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import QuizAnswer from "../components/QuizAnswer"
import styled from "styled-components";

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
      .get("https://opentdb.com/api.php?amount=10&category=10")
      .then((res) => {
        setQuizInfo(res?.data?.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!quizInfo.length) return <div>로딩...</div>;

  return (
    <>
      <Container>
        <QuizQuestion
            quizInfo={quizInfo[order]}
            order={order} 
        />

        <QuizAnswer 
          quizInfo={quizInfo[order]} 
          onNextQuiz={onNextQuiz} 
          order={order}  
          maxLength={quizInfo?.length}
        />
      </Container>
     
    </>
  );
};

export default QuizPage;

export const Container = styled.div ` 
flex-direction: column;
`
