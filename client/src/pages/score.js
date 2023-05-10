import "../index.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Information } from "../components/wordgame";
function Score() {
  console.log(Information())
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
              Your score
            </h2>
          </div>

          <form class="w-2/4 ml-auto mr-auto ">
            <input
              type="text"
              readOnly
              class="text-sky-400 font-mono h-16 pr-6 pl-6 w-60 mb-6 text-2xl border border-slate-200 dark:border-slate-600 rounded-lg text-center"
            ></input>
            <input
              type="text"
              readOnly
              class="text-sky-400 font-mono h-16 pr-6 pl-6 w-60 mb-6 text-2xl border border-slate-200 dark:border-slate-600 rounded-lg text-center"
            ></input>
            <input maxLength="10" class="text-sky-400 font-mono h-16 pr-6 pl-6 w-60 mb-6 text-2xl border border-slate-200 dark:border-slate-600 rounded-lg text-center"></input>
          </form>
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

export default Score;
