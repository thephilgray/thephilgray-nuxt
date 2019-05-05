---
title: Vanilla Quiz Module with Redux and localStorage
abstract: >-
  This little app takes an array of questions and answers and produces an
  interactive quiz.
category: demo
image: https://s3.amazonaws.com/pg-image-host/thepg/screens/Image+2018-08-07+at+6.17.14+PM.png
tags: JavaScript, Redux, SASS, CSS
published: true
---

This little app takes an array of questions and answers and produces an interactive quiz. A list of answer choices with the correct answer specified needs to be included with each question. If multiple answer choices are marked correct, it will automatically render it as a multiple choice question with checkboxes.

The user's answers get saved to localStorage, so they can stop and resume at any time. At the end of the quiz, the user sees the percentage of questions they answered correctly. They can choose to review the entire quiz as much as they want with their wrong answers in red and the correct answers in green.

Frontend frameworks like React and Vue are really handy and performant. But for small demo projects, as long as you have some mechanism to manage and persist state (in this case Redux), you don't really need a framework, which is nice when you don't want to spend all of your mental energy on vendor-specific implementation details.

**Link**: [https://codepen.io/phillipgray/full/jppNVp/](https://codepen.io/phillipgray/full/jppNVp/)
