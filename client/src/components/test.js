import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [words, setWords] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) => {
        setWords(response.data);
      });
    }, []);
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
  }

  if (words.length > 0) {
    const wordlist = [];
    console.log(wordlist);

    words.map((val) => {
      wordlist.push(val.word);
    });
    let result = getRandomItem(wordlist);
    return (
      {result}
    )
  }
}
export default App;