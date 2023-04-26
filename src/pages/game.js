import React from "react";
import "../index.css";
import wordgametimer from "../components/wordgame";
function Game() {
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
        <div class=" w-1/4 h-2/4 ml-14 mr-14  grid grid-cols-1 grid-rows-2 justify-items-center items-center ">
          <div class=" w-full h-3/4 mb-10 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center">
            <p id="score" class="text-green-700	 font-mono text-4xl"></p>
          </div>
          <div class=" w-full h-3/4 mt-10 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center">
            <p id="correct" class="text-green-700	 font-mono text-4xl"></p>
          </div>
        </div>

        <div class=" w-2/4 h-5/6 bg-slate-50	rounded-lg shadow-lg shadow-blue-500/50">
          <div
            class="text-sky-400 font-mono text-2xl w-full flex justify-between	pt-6 pb-6 items-center border-b border-slate-200 dark:border-slate-600 rounded-ss-full h-1/6"
            id="timer"
          >
            <p class="pl-6">
              Time&nbsp;<span id="seconds">00</span>:<span id="tens">00</span>
            </p>
            <div class="" className="buttons">
              <button
                class="text-sky-400 font-mono pr-6"
                onClick={() => {
                  wordgametimer();
                }}
                id="button-start"
              >
                New Game
              </button>
              <button class="text-sky-400 font-mono pr-6" id="button-reset">
                Restart
              </button>
              <a href="/">
                <button class="text-sky-400 font-mono pr-6" id="button-stop">
                  Quit
                </button>
              </a>
            </div>
          </div>

          <div
            class="w-full h-4/6 grid grid-cols-3 grid-rows-2 justify-items-center pt-2 items-center"
            id="button-box"
          ></div>
          <div class="flex justify-center items-center h-1/6">
            <form>
              <input
                id="screen"
                class="text-sky-400 font-mono h-16 pr-6 pl-6 w-80 mb-6 text-2xl border border-slate-200 dark:border-slate-600 rounded-lg text-center"
                type="text"
                readOnly
              />
            </form>
          </div>
        </div>

        <div class=" w-1/4 h-2/4 ml-14 mr-14  grid grid-cols-1 grid-rows-2 justify-items-center items-center ">
          <div class=" w-full h-3/4 mb-10 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center">
            <p id="guesses" class="text-sky-400	 font-mono text-4xl"></p>
          </div>
          <div class=" w-full h-3/4 mt-10 bg-slate-50 ml-14 mr-14 rounded-lg shadow-lg shadow-blue-500/50 flex items-center justify-center">
            <p id="error" class="text-red-700	 font-mono text-4xl"></p>
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

export default Game;
