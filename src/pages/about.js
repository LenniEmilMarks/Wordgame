import React from "react";
import "../index.css";
function About() {
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
        <div class=" w-3/4 h-5/6 bg-slate-50 rounded-lg shadow-lg shadow-blue-500/50 overflow-auto">
          <div class="grid grid-cols-3 grid-rows-1 border-b border-slate-200 dark:border-slate-600" >
            <a
              class="text-sky-400 font-mono text-2xl flex pl-24 items-center"
              href="/"
            >
              Homepage
            </a>
            <h2 class="flex justify-center items-center text-sky-400 text-4xl font-mono mt-4 mb-4">
              About
            </h2>
          </div>

          <div class="grid grid-cols-3 grid-rows-1 justify-items-center pt-6">
            <div class="pl-1 pr-1 ">
              <h3 class=" text-sky-400 text-3xl font-mono text-center">
                Description
              </h3>

              <p class="p-2">
                Description of the Word Game. The word game is simple game with
                goal to guess a random word. When you press the play button on
                the homepage it will take you to the game. If you want to start
                a newgame press the "new game" button after that the game starts
                and 3-6 buttons will show up. You have to click the buttons in
                right order so that they will form a word. After you guess the
                word your victory time will show up on the right and also "YOU
                WON!" text. On the left up there will be your attemps for
                guessing the right word. Also if you guess the word wrong the
                game will just continue and the buttons will reapper and a "TRY
                AGAIN!" text will appear on the bottom left box. There is also
                restart button for to restart the timer and attempts. It will
                also reshuffle the words. And lastly there is "quit" button for
                to exit the game.
              </p>
            </div>
            <div class="pl-1 pr-1">
              <h3 class=" text-sky-400 text-3xl font-mono text-center">
                Author
              </h3>
              <p class="p-2">
                I'm a junior software developer from Finland. With this project
                i'm learing javascript, tailwind and react. I hope that you will
                like this game that i made.
              </p>
            </div>
            <div class="pl-1 pr-1">
              <h3 class=" text-sky-400 text-3xl font-mono text-center">
                Copyright
              </h3>
              <p class="p-2">
                This project is free to use for anyone. No credits needed, i
                hope this will help someone with their projects. Here is the
                github{" "}
                <a
                  class="text-sky-400"
                  href="https://github.com/LenniEmilMarks/wordgame"
                  rel="noreferrer"
                  target="_blank"
                >
                  Link
                </a>{" "}
                for the project.
              </p>
            </div>
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

export default About;
