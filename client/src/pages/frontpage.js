import React from "react";
import "../index.css";


function Frontpage() {
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
        <div class=" w-3/4 h-1/6 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50">
          <div class="flex justify-around h-full items-center">
            <a href="Game">
              <button class="pt-4 pb-4 pl-14 pr-14 text-white text-2xl shadow-lg rounded-lg bg-sky-400">
                Play
              </button>
            </a>

            <a href="Settings">
              <button class="pt-4 pb-4 pl-14 pr-14 text-white text-2xl shadow-lg rounded-lg bg-sky-400">
                Settings
              </button>
            </a>

            <a href="About">
              <button class="pt-4 pb-4 pl-14 pr-14 text-white text-2xl shadow-lg rounded-lg bg-sky-400">
                About
              </button>
            </a>
            <a href="Leaderboard">
              <button class="pt-4 pb-4 pl-14 pr-14 text-white text-2xl shadow-lg rounded-lg bg-sky-400">
                Leaderboard
              </button>
            </a>
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

export default Frontpage;
