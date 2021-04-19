# 04 Web APIs: Code Quiz


## NOTE AS OF 11:27 PM I Finished The most that I could. I will detail what Happened in my report but I am submitting as is to make sure I get some points.

## NOTE AS OF 11:30 PM I just made my final push into the repo - Again I will go over everything in the report. But I want to have at least something to submit. Here are the 2 links https://anirud314.github.io/JavascriptQuiz/ ---- if that doesnt work try using this https://anirud314.github.io/JavascriptQuiz/index.html.

# My Report
## Summary
This weeks challenge was actually very challenging. The good I can take from it is that I understand the versitility that the DOM provides and the amount of work required to master it. The bad is that I don't think I will be able to finish the assignment on time. As of the time I started writing this (April 18th 11:35PM). I have one bug that is causing one of the features to not work and that is the persistance of the app using local storage. I need more time and some help with understanding what happened. I also was unable to touch styling the app with css as well. Lastly I wasn't able to properly comment over my code, and I will get to why it happened. I am not trying to make excuses. I just messed up one part and didnt have time to check if I was doing it correctly which led to me having to restart my project 5 hours before the deadline. 

## Initial Thoughts with what is now known as script(DoesntWork).js
I initially designed my data structure to utilize 2 for loops, one looping around the quiz object and taking and using DOM to create html elements for the question as well as iterate through the quiz to get user input. And another for loop inside of the previously mentioned one to create the multiple choice input options for each question using the options array inside of each question object inside of the quiz array. This structure made sense in my head and on paper, however there was an issue I was facing. In order to utilize eventHandlers for imbedded DOM functions that created the multiple choice options for each question I needed to return to the eventHandler using return EventHandler. The issue with doing that is that in a for loop it breaks the iteration through it if you return a value in the middle of it. I didnt remember this, nor did I know this was the problem until I talked to Dylan(T.A) about it. Thankfully he put me in the right direction but I didnt really have that much time to spare.

## Rushing to find another Solution, current script.js


As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.