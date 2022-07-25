import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Mainpage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Container>
      <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/quiz" element={<QuizPage />} />
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


