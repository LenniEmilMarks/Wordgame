import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./pages/game";
import Frontpage from "./pages/frontpage";
import Settings from "./pages/settings";
import About from "./pages/about";
import Leaderboard from "./pages/Leaderboard";
import Score from "./pages/score";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontpage />,
  },
  {
    path: "Game",
    element: <Game />,
  },
  {
    path: "Settings",
    element: <Settings />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "Score",
    element: <Score />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);