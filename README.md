# click-shuffle-game

## Technologies used:
Visual Studio Code and React framework

## Summary 
The following clicky game is my first attempt at building an application with the React framework. I built each piece of the UI via React components and placed in props, states, and onClick listeners to allow the user to interact with the UI. The goal of the application is to click on each badge only once and rack up a total of 8 points (a point for each gym badge clicked on). If the user clicks on the same Pokemon gym badge twice, then the game ends and the game restarts itself. 

This application is an excercise in array manipulation, .map functioning, setting states, and placing props into components so that they can inherit properties and communication with other components of the application. 

## Things I learned:

1. React in general. I had never worked with this framework before, so many hours went into researching how React works and how to put the entire working UI together. 
2. How to use methods to manipulate array elements. I did this by including a function to shuffle the elements inside of an array, thus changing the position of badges with the assistance of an onClick listener. 
3. How to build individual components, and then export them and require them all in the App.js file before rendering them in the Index.js file.
4. How to use flexgrid to make a clean row. 
5. How to create a function that runs multiple functions once called.

## Steps I took:
1. Research, research, research! I spent many hours over the weekend watching YouTube videos and studying class activities. 
2. After studying the layout and placement of files I started creating my first component, which was a Bootstrap component for a Jumbotron.
3. Created a .json file that contains an array filled with object elements. 
4. Created a "BadgeCard" component where props were passed down to give Onclick listening that would execute the shuffle array function, meaning each clicked badge would reshuffle the arrangement of badges on the UI.
5. Placed in an image for the jumbotron.
6. Coded an increment function so that the user score would increase with each badge clicked. 
7. Alert set up so that once 8 badges were clicked user was informed that they won the game. The game would then reset itself with score back to 0.

## Sources: 
My tutor Ryan who helped me with the shuffle function, classroom assignments, tutorial overviews on React, Stack Overflow.

## Screenshots & gif:

## Badge click resulting in badge shuffle and score increment
![Badge clicked](https://github.com/demonaco/click-shuffle-game/blob/master/click/public/badge.gif)

## UI of application
![UI](https://github.com/demonaco/click-shuffle-game/blob/master/click/public/Screen%20Shot%202020-02-19%20at%205.10.54%20PM.png)

## Code snippet passing in props to BadgeCard
![Passing props](https://github.com/demonaco/click-shuffle-game/blob/master/click/public/Screen%20Shot%202020-02-19%20at%205.12.16%20PM.png)
