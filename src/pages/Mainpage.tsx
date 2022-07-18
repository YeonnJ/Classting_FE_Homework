import axios from "axios";
import { useEffect } from "react";
import StartQuiz from "../components/StartQuiz";

const Mainpage = () => {
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium"
      )
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <StartQuiz />
    </>
  );
};

export default Mainpage;
