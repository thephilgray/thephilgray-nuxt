<template lang="md">

## Demos
### Building a Realtime App with APIs and User Authentication
#### StarNotes
A KanBan App for Your GitHub Starred Repos
##### Inspiration
I star a lot of repos on Github, but for various reasons. Sometimes they're relevant to a project that I'm currently working on. Other times, I just want to bookmark them for future exploration. My original idea was — what if I could just import all my starred repos to a KanBan board and then organize them there?
##### What It Does
StarNotes allows users to login with their GitHub, create KanBan boards and lists, fetch and create cards from their starred repos and add notes to them.
##### How I Built It
I started with the Vuetify Webpack starter. I created a simple layout with navigation and a demo board component that fetches starred repos from the GitHub API. I used the Firebase SDK to authenticate with GitHub and created a dashboard where users can manage their boards. I created a Vuex store based on the initial demo board but with some other properties for user-specific state, and actions and mutations to interact with it. I created board, list, and demo components based on the original demo. Finally, I used the Firebase SDK to sync with a database and update the Vuex store inside the promise resolve callbacks.

##### Challenges I Ran Into
Firebase makes authentication quite easy compared with implementing a Node solution, but it still takes a lot of planning and some troubleshooting. 

For example, the method I used to check the user's auth status to persist their signin as they navigate from page to page doesn't return the same object as the initial signin method, so I couldn't count on always getting some very useful provider data unless I wanted to store that in my database (which I didn't). 

##### What I learned
This was my third project using Vuetify, so there was still much to learn but I became a lot faster at using the API without referring to the docs as much.

I've also worked with Firebase in a few other projects, but I spent a lot of time with the docs and I'm now comfortable with all the common auth and database methods.

Tags: VueJS, Veux, Vuetify, Axios, Firebase, Github API

Link: [https://github.com/philgrayphilgray/vue-2018/tree/master/004_star-notes](https://github.com/philgrayphilgray/vue-2018/tree/master/004_star-notes)

### Approaches in Full-Stack App Development with React and VueJS
#### Album Collector
Variations on a simple app for posting and sharing reviews of your favorite albums

#### Inspiration
I just wanted to make a simple CRUD app to get some experience working with React and VueJS in a full-stack project. I love music and listening to albums all the way through, so this was just another way of playing with them.

#### What It Does?
The final version allows you to browse albums reviews that other users have shared and login to write, share, and manage your own reviews. It has a Node/Express/Mongo backend and Vue and React frontends.

#### How I Built It

I started by building simple Redux/Vuex versions with Create React App and Vue-Cli. Initially, there was no backend — I focused on building out the components from scratch. I got comfortable with tools like Storybook and using Jest, Enzyme, and Cypress for unit and integration testing. In the second phase, I hooked the front-end up to JSON Rest API, a flat-file JSON server with built-in CRUD endpoints. Overall, the VueJS version was a little bit easier to implement, so I decided to focus on React.

In the meantime, I also worked on a couple different backend solutions, one with Express and Mongo, and the other with Prisma. After building a simple API with Prisma, and enjoying the ease of it, I decided to get some more experience with Express and Mongo and chose that route. I wrote the API in a test-driven way, writing assertion tests with Mocha and then later Jest before writing code.

After building some parts of the application on both the front and back ends, I attempted a full-stack test-driven version. I started by writing a custom Webpack config file and setting up linting and various testing tools and workflows. After the initial setup, I followed an outside-in approach, developing basic features first and then moving down the stack to the server level and then further down to the database, attempting to spend more time coding the former and more time testing the latter.

Tags: React, VueJS, Redux, Vuex, Storybook, Axios, Styled Components, SASS, SVG, MongoDB, Prisma, GraphQL, FireBase Functions, etc.

Link: [https://github.com/philgrayphilgray/api-design-2018/tree/master/001_express_mongo](https://github.com/philgrayphilgray/api-design-2018/tree/master/001_express_mongo)

Link: [https://github.com/philgrayphilgray/api-design-2018/tree/master/003_album-collector-api](https://github.com/philgrayphilgray/api-design-2018/tree/master/003_album-collector-api)

Link: [https://github.com/philgrayphilgray/vue-2018/tree/master/001_album-collector](https://github.com/philgrayphilgray/vue-2018/tree/master/001_album-collector)

Link: [https://000album-collector-syizwlkeyw.now.sh/](https://000album-collector-syizwlkeyw.now.sh/)

Link: [https://github.com/philgrayphilgray/review-react-2018/tree/master/002_styled-components](https://github.com/philgrayphilgray/review-react-2018/tree/master/002_styled-components)

Link: [https://github.com/philgrayphilgray/review-react-2018/tree/master/004_redux-axios](https://github.com/philgrayphilgray/review-react-2018/tree/master/004_redux-axios)

Link: [https://004redux-axios-bbwmsdwjot.now.sh/](https://004redux-axios-bbwmsdwjot.now.sh/)

Link: [https://github.com/philgrayphilgray/review-react-2018/tree/master/005_mern](https://github.com/philgrayphilgray/review-react-2018/tree/master/005_mern)




### Learning Test-Driven Development
#### VidBits and Gather Apps
Projects for Codecademy Test-Driven Development Intensive

##### Inspiration
The first time I heard about testing, I was shocked and felt betrayed that no one and told me about it. Then I walked around for a long time guilty about not testing, not quite sure how to go about learning it. The problem is that either someone needs to tell you that you have to do it, or you just have to make a commitment that you're going to do it anyway. So, when I heard about Codecademy's Test Driven Development intensive, I enrolled right away.

##### What It Does
Gather, the first project, is a simple CRUD app that allows you to post pictures by submitting a link, title, and description.

VidBits, the final project, is basically the same concept but with videos.

##### How I Built It
Both are Express apps with a Mongo backend and Handlebars for templating.

I used the course starter files which had Chai for assertions, Mocha as the test runner,  and Webdriver for feature-testing.

The projects were partially guided, so I just followed the step-by-step instructions and referred to previous examples to try to implement each step. I followed the outside-in approach, first writing behavior-driven feature tests and working my way down the stack.

The biggest challenges and lessons learned arose from the nuances of writing assertions and the Mongoose API.

Link: [https://github.com/philgrayphilgray/tdd-vidbits](https://github.com/philgrayphilgray/tdd-vidbits)

Link: [https://github.com/philgrayphilgray/tdd-gather-app](https://github.com/philgrayphilgray/tdd-gather-app)

Tags: Node, Express, Webdriver, Chai, Mocha, Handlebars

### Creating a Personal Portfolio Site with NuxtJS
#### thephilgray.com
Challenge: Create a new personal portfolio site that is server rendered and easy to update and extend.

* Design responsive layout with CSS Grid
* Implement SVG icon sprite system
* Use Google function to store tweets to be fetched and displayed on the site

Link: [https://github.com/philgrayphilgray/thephilgray](https://github.com/philgrayphilgray/thephilgray)

Tags: VueJS, Nuxt, Axios, SASS

### Creating App Prototypes with VueJS and React
#### FlashCards App Prototype

Link: [https://codepen.io/phillipgray/pen/ZyZJeK](https://codepen.io/phillipgray/pen/ZyZJeK)

Link: [https://github.com/philgrayphilgray/vue-flashcads-tutorial](https://github.com/philgrayphilgray/vue-flashcads-tutorial)

Link: [https://github.com/philgrayphilgray/flashcards-react](https://github.com/philgrayphilgray/flashcards-react)

Tags: VueJS, React

### Experiments in Reactive UI with Vanilla JS
#### Vanilla Tic Tac Toe and Space Invaders Games, and an Experiment with Collision Detection and Gravity

Link: [https://codepen.io/phillipgray/pen/LjOqQa](https://codepen.io/phillipgray/pen/LjOqQa)

Link: [https://codepen.io/phillipgray/pen/ZJPXwe](https://codepen.io/phillipgray/pen/ZJPXwe)

Link: [https://codepen.io/phillipgray/pen/zdRdjr](https://codepen.io/phillipgray/pen/zdRdjr)

Tags: JavaScript, SASS, Games

### Learning VueJS
#### Stock Trader App (My Solution)

Link: [https://github.com/philgrayphilgray/udemy-vuejs-solutions/tree/final-proj](https://github.com/philgrayphilgray/udemy-vuejs-solutions/tree/final-proj)

Tags: VueJS, Veux, Bootstrap
</template>

<style lang="scss" scoped>
p + p {
  text-indent: 0;
}

ul {
  padding: 0 2em;
}
</style>
