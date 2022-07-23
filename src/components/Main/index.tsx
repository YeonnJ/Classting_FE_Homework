import { useNavigate } from "react-router-dom";
import { Container, ContentsContainer } from "./style";

const Main = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/quiz");
  };
  return (
    <>
      <Container>
        <ContentsContainer>
          <h1>청소년 독서퀴즈 :)</h1>
          <button onClick={onClick}>퀴즈 풀러가기!</button>
        </ContentsContainer>
      </Container>
    </>
  );
};

export default Main;
