import axios from "axios";
import { useEffect } from "react";

const Mainpage = () => {
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium"
      )
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return <></>;
};

export default Mainpage;
