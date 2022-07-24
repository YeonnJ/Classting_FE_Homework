import styled from 'styled-components';

export const AnswerWrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AnswerResult = styled.div ` 
  display:flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 15px;
    }

  button {
    border: 0;
    cursor: pointer;
    background-color: white;
    margin-left: 200px;
  }
`

export const QuizList = styled.div`
  display :flex ;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
  margin: 0 auto; 
  margin-top: 150px;
`

export const AnswerBtn = styled.button`
  display :flex ;
  justify-content: center;
  align-items: center; 
  border: 0;
  padding: 15px;
  margin: 5px 0;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background: ${(props) => (props?.disabled ? "lightgray": "#548C7C" )};

  color: ${(props) => (props?.disabled ? "black": "wheat" )};
`


export const Red = styled.p ` 
  color: #BF2A37;
  font-size: 15px;
`



