import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Main = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/quiz");
  };
  
  return (
    <>
      <Container>
        <h1>청소년 독서퀴즈 :)</h1>
        <button onClick={onClick}>퀴즈 풀러가기!</button>
      </Container>
    </>
  );
};

export default Main;
