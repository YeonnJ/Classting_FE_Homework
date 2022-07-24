import { Pie } from 'react-chartjs-2';
import { Container } from './style';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
let correct = sessionStorage.getItem("정답수");
let incorrect = sessionStorage.getItem("오답수");

export const data = {
    labels: ['정답', '오답'],
    datasets: [
      {    
        data: [correct, incorrect], //수량  (맞은개수, 틀린개수)
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const ResultChart = () => {

  
    return (
        <>
          <Container>
            <Pie data={data} />
          </Container>
        </>
    );
};

export default ResultChart;