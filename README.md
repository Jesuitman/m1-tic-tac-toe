Tic Tac Toe
Specification
Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a Tic Tac Toe game from scratch!

Learning Goals
Solidify and demonstrate your understanding of:
DRY JavaScript
event delegation to handle similar event listeners
Understand the difference between the data model and how the data is displayed on the DOM
Iterate through/filter DOM elements using for loops
Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

There have been some changes to this project - so until we can get a new video uploaded, please refer to the bullet points below to understand the functional expectations of the project.

The top displays which player’s turn it is
They can only place their token in an empty square
Attempting to place their token on a square that’s already occupied will not work, and it remains their turn
Once they place their token, it becomes the other player’s turn (the banner updates to communicate this)
A player can win by connecting 3 horizontally, vertically, or diagonally. When a win occurs
The top banner changes to declare the winner
The dom updates to display how many wins the player has in total
The game RESTARTS ITSELF after a brief pause, (long enough that the winner message can be read before resetting)
The player who didn’t begin the previous game now is the first player to go in the new game
A draw can occur, in which case:
The top banner declares a draw
Neither player’s win count increases or decreases
The game restarts after a brief pause, with the opposite player beginning the game (just like when a game restarts after a player wins)
In this project, we will not be providing detailed iterations. We want you to exercise your skills in planning out work!

Notes:

A timeout is used after a completed game to reset the board.
No need to match colors or icons, but the overall layout should be the same. You can get as creative as you would like with your Tic Tac Toe design!
You can simply use emoji instead of actual icons (the video demo above just used the ⭐ and ❤️ emoji!)

Architecture
Your entire application will consist of one HTML file, one CSS file and one JavaScript file.

Your main.js file should hold your game’s logic and DOM related JavaScript.
It’s best to keep this file organized with the logic organized separately from the DOM related JavaScript.

Your game logic methods must include, but are not limited to:
A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
A function called increaseWins - increases the count of a player’s wins (should work for either player)
A function that keeps track of the data for the game board
A function that keeps track of which player’s turn it currently is
A function that checks the game board data for win conditions
A function that detects when a game is a draw (no one has won)
A function that resets the game board’s data to begin a new game
Your DOM related JavaScript will include:
Query selectors
Function(s) to display the game board and user data
Event listeners
As an optional extension you could choose to keep your DOM related JavaScript in a separate JS file altogether. This is NOT a requirement or expectation of this project. If you finish with extra time and want to try refactoring your code to pull the DOM related JavaScript into a domUpdates.js file, be sure to do so on a branch so you aren’t breaking your finished, working code while you play with it.

Data Model
In a game like Tic Tac Toe, it is tempting to manipulate the DOM first. Remember that the game logic exists exclusively in the data model. The DOM simply reflects/displays that data model.

Suggested Iterations
This workflow is not required, but will help you meet the overall requirements of the project.

Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
Create the functions that describe/update the players and their data
Create the functions that describe/update the game board and gameplay
Reflect: without thinking about the DOM, could you call all the necessary functions that a game would need in order to function? Would your data update properly? Would your game be able to know when someone has won? etc
Create central game board on the DOM and connect it to the game’s data
Display each player’s data in the sidebars
Connect the data model to the DOM - ensure that the data model updates based on user interaction
Automatically reset the game board to allow for a new game to be played after the previous game is won

Notes on Project Feedback
The rubric below serves as a guide for both students and instructors.

Students:

It should be used as a reference throughout the project to keep on track and guide learning.
It should also be used by students to self-assess their work.
Instructors:

It should be used to evaluate the project at its final due date/time.
It should be a guide to provide relevant feedback to students so they can grow and improve in the areas that need deeper understanding.
Final Project as Showcase
The evaluation will provide feedback by answering the only important question:

Does the project demonstrate student understanding of the learning goals & concepts of this module?

This project will answer that question, being marked as YES, NOT YET, and WOW. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by “averaging” each section’s outcome. You can think of a “yes” being worth a 1, a “not yet” being worth a 0, and a “wow” being worth a 2.

An average that is above 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1+ is considered a wow. An average of 0.5 or below is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below).

Rubric
This project has 4 evaluated concepts. Please note that the rubric categories are not weighted equally. We will be using the following weights in order to determine your final score:

Functionality: 1/3 of final score
JavaScript: 1/3 of final score
HTML: 1/6 of final score
CSS: 1/6 of final score
Here is what the final score means in terms of completing the module:

Wow: Student will complete module if prior project work, attendance, and final assessment corroborate readiness
Yes: Student will complete module if prior project work, attendance, and final assessment corroborate readiness
Not Yet Student needs more time with concepts and work covered in module
Please note that a passing project must include a fully playable game.

Note about the below criteria
Competency & understanding of these concepts can be demonstrated in many ways. The following examples are not checklists to complete! They are illustrations to guide you as you develop this project and showcase your learning.


Functional Expectations
As mentioned above, functionality does have more weight in this final project in order to demonstrate proficiency across the other criteria of the rubric. However, you should not pursue additional functionality at the expense of code quality. Well-refactored, thoughtful code is better than sloppy extra features.

Functionality competency examples

💫ON TRACK💫 can look like:
The user is able to play an entire game successfully (win, draw, display player data updates).

✨WOW✨ can look like:
Application is fully complete (matches all functionality from demo without bugs) and implements additional functionality devised by the student, such as player data persisting across page refreshes, or allowing a player to choose their own emoji icon, etc.
Javascript

💫ON TRACK💫 can look like:
Crafts JS according to the Turing JS Style Guide
No nested if/else statements or for loops.
Functions are DRY and adhere to the Single Responsibility Prinicple (SRP)
Global variables are thoughtfully created, with a clear understanding demonstrated as to what needs to be global and what can be local
The application correctly implements a data model to describe the player and game data, including all required methods. The data model is kept up to date when players interact with the DOM

✨WOW✨ can look like:
Changes to the DOM only happen after the Data Model has been updated. The Data Model is then used to update the DOM.
Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering.
Demonstrates efforts towards making functions pure when possible. Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.
Bracket notation is utilized effectively to make accessing properties of class instances more dynamic.
expander arrow HTML

💫ON TRACK💫 can look like:
Crafts markup according to the Turing HTML style guide
Application utilizes consistant naming for HTML classes and IDs, and follows suggested conventions. Example: classes should be named using kabab-case, ids should be used sparingly
Application uses an appropriate amount of HTML semantic elements. If <div> or <span> elements are used, they are only for styling purposes.

✨WOW✨ can look like:
Developers use BEM, SMACCS, or another set of naming conventions for classes. Note: If going this route, document it in your README and let your project manager know which naming convention will be used.
Application fully implements HTML that is accessible for individuals with visual disabilities. Note: This will be checked using the Chrome Extenstion WAVE audit tool, and 0 errors & 0 contrast errors are expected.
expander arrow CSS

💫ON TRACK💫 can look like:
Crafts CSS according to the Turing CSS style guide
Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
CSS includes several examples of using a class to apply a styling rule block to multiple elements.
The design of the page is cohesive and ensures an intuitive user experience. Any user could navigate the application without any guidance from the developer.

✨WOW✨ can look like:
CSS is DRY, utilizing classes/rules to cut down on repetitive styles.
Microinteractions such as hover states and animations have been thoughtfully added to improve the user experience.
Design is responsive across small, medium and large breakpoints.

Minimum Professionalism Expectations
Commits are atomic and frequent, effectively documenting the evolution/progression of the application
Developer uses PRs from feature branches before adding new code to the main branch.
The README is formatted well and gives new contributors and employers sufficient context about the project:
Overview of project and goals, technologies used, your code architecture, future features, challenges, wins, and any other reflections
Setup instructions
Screenshots or video of your functioning app