import "../index.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Leaderboard() {
  const [scores, setWords] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/scores").then((response) => {
      setWords(response.data);
    });
  }, []);
  const wordlist = [];

  if (scores.length === 0) {
    return <>{console.log("loading")}</>;
  } else {
    scores.map((val) => {
      wordlist.push(val);
    });
    console.log(wordlist);
  }

  return (
    <div className="app">
      <header
        class="flex items-center justify-center bg-sky-950 w-full h-1/6"
        id="header"
      >
        <h1
          class="text-sky-400 font-mono text-5xl text-center"
          id="header-text"
        >
          A Word Game
        </h1>
      </header>
      <main
        class="bg-[url('img/background-image.jpg')] bg-center bg-fixed bg-no-repeat	bg-cover w-full h-4/6 flex items-center justify-center"
        id="main"
      >
        <div class=" w-2/4 h-5/6 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50">
          <div class="grid grid-cols-3 grid-rows-1 border-b border-slate-200 dark:border-slate-600">
            <a
              class="text-sky-400 font-mono text-2xl flex pl-12 items-center"
              href="/"
            >
              Homepage
            </a>
            <h2 class="flex justify-center items-center text-sky-400 text-4xl font-mono mt-4 mb-4 ">
              Leaderboard
            </h2>
          </div>
          <div class="flex justify-center pt-4 pb-2 ">
            <p class="text-sky-400 font-mono text-2xl pr-10 pl-10">
              Time
            </p>
            <p class="text-sky-400 font-mono text-2xl pr-10 pl-10 ">
              Word
            </p>
            <p class="text-sky-400 font-mono text-2xl pr-10 pl-10">
              User
            </p>
          </div>
          <div class="w-3/5 max-h-72	 min-h-72 overflow-auto grid ml-auto mr-auto border border-slate-200 dark:border-slate-600">
            {wordlist.map((wordlists) => (
              <div class="text-sky-400 font-mono mb-6 text-2xl flex justify-center">
                {wordlists.time} - {wordlists.word} - {wordlists.name}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer
        class="flex items-center justify-center	 bg-sky-950 w-full 	h-1/6"
        id="footer"
      >
        <p class="text-sky-400 font-mono text-2xl" id="footer-text">
          A Word Game │ Copyright by <a href="about">Lenni</a>, 2023
        </p>
      </footer>
    </div>
  );
}

export default Leaderboard;
