import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Mainpage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {

  const [quizInfo, setQuizInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=10")
      .then((res) => {
        setQuizInfo(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      <BrowserRouter>
      <Container>
      <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/quiz" element={<QuizPage quizInfo={quizInfo}/>} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Container>
        
      </BrowserRouter>
    </>
  );
}

export default App;

export const Container = styled.div ` 
  width: 414px;
`


