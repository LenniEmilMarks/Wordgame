import React from "react";
import "../index.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Settings() {
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
          <a class="text-sky-400 font-mono text-2xl flex pl-12 items-center" href="/">
              Homepage
            </a>
          <h2 class="flex justify-center items-center text-sky-400 text-4xl font-mono mt-4 mb-4">
            Settings
          </h2>

          </div>
          <table class="border-collapse table-fixed w-1/4 text-sm">
            <tbody class="bg-slate-50">
              <tr>
                <td class="text-1xl border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-sky-400 font-mono">
                  Timer:{" "}
                </td>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-sky-400 font-mono">
                  <Switch {...label} defaultChecked />
                </td>
              </tr>
              <tr>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-sky-400 font-mono">
                  Track results:{" "}
                </td>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-sky-400 font-mono">
                  <Switch {...label} />
                </td>
              </tr>
              <tr>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-sky-400 font-mono">
                  Dark Mode:{" "}
                </td>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-sky-400 font-mono">
                  <Switch {...label} />
                </td>
              </tr>
              <tr>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-sky-400 font-mono">
                  Light Mode:{" "}
                </td>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-sky-400 font-mono">
                  <Switch {...label} defaultChecked />
                </td>
              </tr>
              <tr>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-sky-400 font-mono">
                  Time limit:{" "}
                </td>
                <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-sky-400 font-mono">
                  <Switch {...label} />
                </td>
              </tr>
            </tbody>
          </table>
          
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

export default Settings;
