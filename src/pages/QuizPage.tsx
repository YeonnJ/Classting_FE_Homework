import { useEffect, useMemo, useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import QuizAnswer from "../components/QuizAnswer"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState(0);
   // The counter
  const [count, setCount] = useState<number>(0)
   // Dynamic delay
  const [delay, setDelay] = useState<number>(1000)
  const [quizInfo, setQuizInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=10")
      .then((res) => {
        setQuizInfo(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const onNextQuiz = () => {
    if (order >= quizInfo.length) {
      setOrder(0);
    } else {
      setOrder(order + 1);
    }
  };

  const onClick = () => {
    navigate('/result')
    window.location.reload()
  };

  if (!quizInfo.length) return <div>로딩...</div>;

  return (
    <>
     {order === quizInfo?.length ? ( <Button onClick={onClick}>결과보러가기</Button> ) : (
      <Container>
        <QuizQuestion
          quizInfo={quizInfo[order]}
          onNextQuiz={onNextQuiz} 
          order={order} 
          maxLength={quizInfo?.length}
        />

        <QuizAnswer 
          quizInfo={quizInfo[order]} 
          onNextQuiz={onNextQuiz} 
          order={order}  
          maxLength={quizInfo?.length}
        />
      </Container>
     )
      
}
    </>
  );
};

export default QuizPage;

export const Container = styled.div ` 
  flex-direction: column;
`

export const Button = styled.button ` 
  display: flex;
  justify-content: center;
  align-items: center;
  border:0;
  margin: 0 auto;
  margin-top: 50%;
  padding: 20px;
  background-color: tomato;
  color:white;
  font-weight: 500;

`
