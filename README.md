# Wordgame App

## Functional Wordgame App which you can play by guessing a letters of a word in correct order.

This project is my second project with react. Programming languages and libraries i used in this project were React(includes javascript and html), Axios,
React-router, Tailwind CSS, Cors and Express. The app has following functionalities.

* Different pages when clicking buttons like settings, about, leaderboard and play.
* Homepage button to go back to the main page.
* Play page has three buttons which are quit, restart and new game.
* Quit button leaves the page, Restart button resets the current game timer, attemps and shuffles the word.
* New game button start a new game with different word and also starting the timer.
* User can click the boxes where the letters are and they appear in empty input in bottom of the game box.
* App can tell if user clicked the letter boxes in correct order.
* The App sends messages in small boxes if you win or guess the word wrong.
* The App tells you your attemps on guessing the word.
* Connects to mysql localhost database.

## How to install this Wordgame App

Here are the steps to run this project.

1. You need node.js to open this project, you can get it here https://nodejs.org/en/download.
2. Clone this project.
3. Open cmd and navigate to projects client folder.
5. Create node_modules for client folder.
6. Serverside isn't really necessary because i didn't finish the ideas which i would have used the serverside but 
   if you want to make it work open cmd and navigate to projects server folder.
7. Create node_modules for server folder.
8. Now you need to install some modules, lets start with the client side.
9. First install Axios(not needed if you dont use serverside), React-router, Tailwind CSS and if you want install mui. It makes the checkboxes to the settings page.
10. Here are the links for the client modules. First Tailwind:https://tailwindcss.com/docs/installation, Second React-router:https://reactrouter.com/en/main/start/tutorial,
    third MUI:https://mui.com/material-ui/getting-started/installation/ and fourth Axios:https://axios-http.com/docs/intro
11. For the server side install Cors and Express.
12. Here are the links for the server modules. First Express:https://expressjs.com/en/starter/installing.html and Second Cors:https://expressjs.com/en/resources/middleware/cors.html.
13. If you want you can also connect the wordgame to some databases but as i said they don't really do anything because i didn't finish the ideas of mine.
14. Run "npm start" on cmd in client folder.
15. Run "npm run devStart" on cmd in server folder.
16. Now the wordgame should work on your localhost:3000 and the serverside on localhost:3001.


## How to tweak this project for your own uses

For your own use, just clone this project and rename it or copy the code straight from github to your own code. Remember that this project uses react and different react modules
which you may need order to get the wordgame code work.

## Find a bug?

If you found any issues or you would like to suggest an improvement or ideas to this project, please submit an issue using the issues tab above.

## Image of the project
![Alt text](https://user-images.githubusercontent.com/129946468/237336505-194e83dd-bac6-46f0-8978-4b5af8e9a11d.png)
