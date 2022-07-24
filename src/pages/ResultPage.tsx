import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ResultChart from '../components/ResultChart';

const ResultPage = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate('/')
    sessionStorage.clear();
  }

    return (
        <ResultWrapper>
          <p>수고하셨습니다 🙇‍♀️🙇‍♀️</p>
          <ResultChart /> 

           <div>
            <button onClick={GoHome}>다시시작</button>
           </div>
        </ResultWrapper>
    );
};

export default ResultPage;

export const ResultWrapper = styled.div ` 
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

p {
  font-size: 20px;
  font-weight: 600;
  color:#252626;
}

button {
  border: 0;
  padding: 8px 10px;
  margin:  15px 5px ;
  background-color: wheat;
  font-weight: 600;
  color: #252626;
}
`

