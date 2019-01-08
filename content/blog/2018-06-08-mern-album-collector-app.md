---
title: Creating a Full-Stack MERN App from Scratch, Part 1
tags: JavaScript, React, Node, Mongo, Express, Webpack, Redux, Testing, Jest, Cypress, Storybook
abstract: This is the first part of a series of posts where I describe step-by-step how to build an app from scratch using Mongo, Express, React, and Node. Using the example of a simple CRUD app that allows users upload album artwork and rate albums, I'll touch on configuring Webpack, linting, end-to-end testing, Redux, serverless functions, and more.
---

The project source code can be found here: [https://github.com/thephilgray/review-react-2018/tree/master/005_mern](https://github.com/thephilgray/review-react-2018/tree/master/005_mern). A screenshot of the original Figma mockup along with the original Vue prototype can be found here: [https://github.com/thephilgray/designs-2018/tree/master/000_album-collector](https://github.com/thephilgray/designs-2018/tree/master/000_album-collector).

## Express + React Setup

There's incredible diversity in approaches to structuring a full-stack MERN application. The end results are the same, but it seems that no two are alike, and the Goldilocks principle applies. I spent the better part of a week reviewing boilerplates and tutorials. Each one was either a little outdated, or for my needs, either over-simplistic or too advanced.

But I found one tutorial (link at the bottom of this first section) that presented just the right amount of configuration and explanation to understand how the pieces fit together while also building the foundation. This first section comprises of my notes while following along with that tutorial.

### Initial Config and Project Setup

We'll be building out this project structure:

```txt
├── README.md
├── index.html
├── nodemon.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── client
│   │   ├── App.js
│   │   └── index.js
│   └── server
│       ├── database
│       ├── index.js
│       ├── models
│       ├── routes
├── webpack.config.js

* Generated with tree-cli: https://www.npmjs.com/package/tree-cli
```

The `React` code is in the `client` directory, the `Express` and `Mongo` code is all in the `server` directory. Config files are at the project root.

- Touch `.babelrc`. Preset `env` transforms `babel-preset-2015`, `babel-preset-2016`, and `babel-preset-2017` to es5. Preset `react` allows use of JSX.

```js
// .babelrc
{
  "presets": ["env", "react"],
  "plugins": ["transform-object-rest-spread"]
}
```

- Touch `.eslintrc.json`

```js
//.eslintrc.json
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off"
  }
}
```

- Touch `webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js', // where the application starts executing and webpack starts bundling
  output: {
    // the target directory and filename for the bundled output
    // __dirname is the directory name of the current module (this config file)
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // transform jsx to js
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // use css-loader to handler any css files
      }
    ]
  },
  devServer: {
    port: 3000, // listen to port 3000
    open: true, // open home page on startup
    proxy: {
      // for when you have a separate API backend development server and you want to send API requests on the same domain
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]), // remove the build files before building
    new HtmlWebpackPlugin({
      // loads the template at public/index.html and injects the output bundle
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
```

- Touch `nodemon.json`. This watches for any changes in the server source in dev mode and restarts the server.

```js
{
  "watch": ["src/server/"]
}
```

- Create `src/server` directory and touch `index.js`.
- Touch `src/server/sampledata.json`

```js
const express = require('express');

const data = require('./sampledata.json');

const app = express();

const port = process.env.PORT || 8080;
app.use(express.static('dist'));
app.get('/api/albums', (req, res) => res.send(data));
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
```

- npm init and write run scripts in `package.json`

```js
  "scripts": {
    "client":
      "webpack-dev-server --mode development --devtool inline-source-map --hot",
    "server": "nodemon src/server/index.js",
    "dev": "concurrently \"npm run server\" \"npm run client \""
  },
```

- Install dependencies

```bash
yarn add express react react-dom axios
yarn add -D babel-core babel-jest babel-loader babel-preset-env babel-plugin-transform-object-rest-spread babel-preset-react body-parser clean-webpack-plugin concurrently css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react html-webpack-plugin jest morgan nodemon style-loader webpack webpack-cli webpack-dev-server
```

- Create `src/client` and touch `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

- Touch `App.js`

```js
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: null };
  }
  componentDidMount() {
    axios.get('/api/albums').then(res => this.setState({ albums: res.data }));
  }
  render() {
    return (
      <div>
        {this.state.albums !== null ? (
          this.state.albums.map(album => <h2 key={album._id}>{album.title}</h2>)
        ) : (
          <p>Loading....</p>
        )}
      </div>
    );
  }
}
```

- Touch `public/index.html` and `public/favicon.ico`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
```

Source: [https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708](https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708)

TODO: Review: [https://www.robinwieruch.de/minimal-react-webpack-babel-setup/](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

TODO: Watch for updates: [https://github.com/Hashnode/mern-starter](https://github.com/Hashnode/mern-starter)

## Connect to MongoDB

The notes in these next three sections are primarily influenced by the projects I worked on in the [Codecademy TDD Intensive course](https://www.codecademy.com/pro/intensive/test-driven-development).

- Start MongoDB locally

```bash
mongod -dbpath ~/data/db
```

- Or provision a new db through MLAB. Create a username and password for the db. Add the username and password to the link from MLAB. Create a `.env` file and set `DATABASE_URL` to the full link.

- Install `mongoose`

```bash
yarn add -D mongoose
```

- Create `src/server/database/index.js`

```js
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl =
  process.env.DATABASE_URL || `mongodb://localhost/mern_${env}`;

module.exports = {
  mongoose,
  databaseUrl
};
```

- Connect to mongoose before starting the express app

_Later, we'll set the DATABASE_URL in `.env` to connect to a Mongo db on MLAB when running in production._

## Server Testing

- Add `ESLint` support for `Jest`

```js
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off"
  },
  "plugins": ["jest"]
}
```

- Add a `test` script to `package.json`

```js
  "scripts": {
  //...other scripts
    "test": "jest"
  }
```

### Write initial server tests and routes (confirm setup)

- Touch `src/server/routes/index.test.js`
- Write a test for GET `/`

```js
const { assert } = require('chai');
const request = require('supertest');

const app = require('../../server/');

describe('GET `/api`', () => {
  it('should return a JSON message and a status of 200', async () => {
    const response = await request(app).get('/api');

    assert.equal(response.status, 200);
    assert.include(response.body, {
      message: 'root'
    });
  });
});
```

- Touch 'src/server/routes/index.js'

```js
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'root'
  });
});

module.exports = router;
```

- Update express app to use route and run on a separate port for testing

```js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { mongoose, databaseUrl } = require('./database');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use(express.static('dist'));

app.use('/api/', routes);

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect(databaseUrl).then(() => {
    app.listen(7000, () => console.log('Listening on http://localhost:7000'));
  });
} else {
  mongoose.connect(databaseUrl).then(() => {
    app.listen(port, () =>
      console.log(`Listening on http://localhost:${port}`)
    );
  });
}

module.exports = app;
```

- Create a post route to add an album

```js
// src/server/routes/index.test.js

const { assert } = require('chai');
const request = require('supertest');

const Album = require('../models/');
const { mongoose, databaseUrl } = require('../database');

const app = require('../../server/');

const newAlbum = {
  title: 'Space is the Place',
  artist: 'Sun Ra',
  art:
    'https://upload.wikimedia.org/wikipedia/en/6/6c/Space_Is_The_Place_album_cover.jpg',
  year: '1973',
  rating: 5
};

// setup and teardown utilities
async function connectDatabase() {
  await mongoose.connect(databaseUrl);
  await mongoose.connection.db.dropDatabase();
}

async function disconnectDatabase() {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
}

describe('/api/albums', async () => {
  // setup and teardown utilities
  beforeEach(connectDatabase);
  afterEach(disconnectDatabase);

  describe('Server path: `/api/albums/add`', () => {
    describe('POST', () => {
      it('should return a `201` status code when creating a new album', async () => {
        const response = await request(app)
          .post('/api/albums/add')
          .send(newAlbum);

        assert.equal(response.status, 201);
      });
    });
  });
});

// src/server/routes/index.js

const router = require('express').Router();

const Album = require('../models');

router.get('/albums', async (req, res) => {
  const albums = await Album.find({}).exec();
  res.json(albums);
});

router.post('/albums/add', async (req, res) => {
  const newAlbum = await new Album(req.body);
  await newAlbum.save();
  const album = await Album.findOne(req.body);
  res.status(201).json(album);
});

module.exports = router;
```

- Create the model
- Touch `src/server/models/index.js`

```js
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String
  },
  artist: {
    type: String
  },
  art: {
    type: String
  },
  year: {
    type: String
  },
  rating: {
    type: Number
  }
});

module.exports = mongoose.model('Album', albumSchema);
```

- Get all albums

```js
// src/server/routes/index.test.js

// ...imports and other tests

describe('GET `/api/albums`', () => {
  it('should return a status of 200', async () => {
    const response = await request(app).get('/api/albums');

    assert.equal(response.status, 200);
  });

  it('should return an array of albums', async () => {
    await request(app)
      .post('/api/albums/add')
      .send(newAlbum);

    const response = await request(app).get('/api/albums');

    assert.include(JSON.stringify(response.body), newAlbum.title);
    assert.equal(response.body.length, 1);
  });
});
```

## Feature Testing

`Enzyme` is awesome for feature-testing React. It's easy to setup and the DOM manipulation and traversal API is intuitive. It actually renders whatever components you're testing and allows you to assert against that rendered code. I definitely intend to use it in this project.

However, by itself, it doesn't give me full confidence and is a little onerous in a test-driven environment, where it would be preferable to write the very first feature tests against the DOM and not an abstraction.

I've had good experiences with `Storybook`, which lets you develop your components in isolation, ideally the way you would write your tests. Creating stories and being able to interact with default states and different edge cases in the browser gives me a lot more confidence when I'm starting out and it's great for design. But it's not a stand-in for an automated test suite.

I want my feature/integration testing pyramid to include a small suite of end-to-end tests backed by a more complete stack of granular Enzyme tests.

Originally, I thought to use Webdriver.io, but after several daunting experiences struggling with the initial setup, I decided to finally try out `Cypress`, which has a wonderful [set of videos about testing a simple React app](https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App), and can be used in a similar Behavior-Driven approach that I used to test individual components with `Storybook` but with the addition of robust automation features that make it ideal for integration testing.

### Setup Cypress

- Install cypress

```bash
yarn add -D cypress
```

- Add cypress command to `package.json` scripts and add `jest` config to ignore `Cypress` tests

```js
// package.json

  "scripts": {
  // ...other scripts
    "cypress": "cypress open",
    "test": "jest --watch"
  },
  "jest": {
    "testPathIgnorePatterns": ["/node_modules/", "/cypress/"]
  },
```

- Run cypress for the first time

```bash
yarn cypress
```

Cypress will create some `cypress.json` config file at the project root as well as a `cypress` directory which includes the following directories:

```txt
./cypress

├── fixtures
├── integration
├── plugins
├── screenshots
└── support
```

- Remove the sample files in `fixtures` and `integration`. We'll be writing our tests inside `integration`.

Our project structure now resembles this:

```txt
├── README.md
├── cypress
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   │   └── index.js
│   ├── screenshots
│   │   └── my-image.png
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── index.html
├── nodemon.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── client
│   │   ├── App.js
│   │   └── index.js
│   └── server
│       ├── database
│       │   └── index.js
│       ├── index.js
│       ├── models
│       │   └── index.js
│       ├── routes
│       │   ├── index.js
│       │   └── index.test.js
│       └── sampledata.json
├── webpack.config.js
└── yarn.lock
```

### Write First Feature Tests with Cypress

_Disclaimer: This is my first time to test drive Cypress._ 🎉

- Add the devServer url as the `baseUrl` to `cypress.json`

```js
// ./cypress.json

{
    "baseUrl": "http://localhost:3000"
}
```

- Touch `cypress/integration/app-init.spec.js`

```js
// cypress/integration/app-init.spec.js

describe('App intitialization', () => {
  it.only('should contain the `CardGrid` component', () => {
    cy.visit('/').get('.CardGrid');
  });
});
```

- Start the `Webpack` dev server with `yarn dev` and then `Cypress` with `yarn cypress` and click `Run All Tests`
- There is no element with the class `.CardGrid`; the test should fail
- Touch `src/client/components/CardGrid.js`

```js
// src/client/components/CardGrid.js

import React from 'react';

const CardGrid = () => (
  <div className="CardGrid">
    <p>Card</p>
  </div>
);

export default CardGrid;
```

- Import and use this component inside the `App` component, removing the old code that fetched data directly from the server

```js
// src/client/App.js

import React from 'react';

import CardGrid from './components/CardGrid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CardGrid />
      </div>
    );
  }
}
```

The first test should now be passing. But we're not done with it. We really want to make sure that the component renders the data it receives as props. These next steps will closely follow the video tutorial.

- Touch `cypress/fixtures/albums.json`
- Copy the sample data array into this file

```js
[
  {
    _id: '1521567322',
    title: 'Space is the Place',
    artist: 'Sun Ra',
    art:
      'https://upload.wikimedia.org/wikipedia/en/6/6c/Space_Is_The_Place_album_cover.jpg',
    year: '1973',
    rating: 5
  },
  {
    _id: '1521567405',
    title: 'Lanquidity',
    artist: 'Sun Ra',
    art: 'https://upload.wikimedia.org/wikipedia/en/2/22/Lanquidity.jpg',
    year: '1978',
    rating: 5
  }
  // ... other albums
];
```

- Rewrite the test in `app-init.spec.js`

```js
// cypress/itegration/app-init.spec.js

describe('App intitialization', () => {
  it.only('Loads todos on page load', () => {
    cy.server();
    cy.route('GET', '/api/albums', 'fixture:albums');
    cy.visit('/');

    cy.get('.CardGrid .Card').should('have.length', 7);
  });
});
```

- Touch `src/client/lib/service.js`

```js
import axios from 'axios';

export const loadAlbums = () => axios.get('/api/albums'); //eslint-disable-line
```

- Call `loadAlbums()` in `src/client/App.js`

```js
// src/client/App.js

/**
 * Essentially the same as earlier,
 * but the Axios request was moved into a separate file.
 **/

import React from 'react';
import { loadAlbums } from './lib/service';
import CardGrid from './components/CardGrid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: null };
  }

  componentDidMount() {
    loadAlbums().then(({ data }) => {
      this.setState({ albums: data });
    });
  }
  render() {
    return (
      <div>
        <CardGrid albums={this.state.albums} />
      </div>
    );
  }
}
```

- Map over a div with the class `.Card` inside the `CardGrid` component

```js
import React from 'react';
import PropTypes from 'prop-types';

const CardGrid = props => (
  <div className="CardGrid">
    {props.albums !== null
      ? props.albums.map(album => (
          <div className="Card" key="album._id">
            <h2>{album.title}</h2>
          </div>
        ))
      : null}
  </div>
);

CardGrid.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object)
};

CardGrid.defaultProps = {
  albums: [{}]
};

export default CardGrid;
```

Now the test is passing, and even though our server is already prepared to handle this api route, we can test the component in isolation by stubbing the request and using fixture data.

One thing I'm already thinking about is that it's not going to be practical using class selectors, as I plan to build out my components with styled-components.

A quick search leads me to this recommendation:

> "Best Practice: Use data-\* attributes to provide context to your selectors and insulate them from CSS or JS changes."

- [https://github.com/cypress-io/cypress/issues/1212](https://github.com/cypress-io/cypress/issues/1212)
- [https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)

So, let's start to use styled-components and change our tests to use the `data-cy` selector for DOM traversal.

- Update the test in `app-init.spec.js` to use data attribute selectors. Also, assert that

```js
// cypress/integration/app-init.spec.js

describe('App intitialization', () => {
  it.only('Loads todos on page load', () => {
    cy.server();
    cy.route('GET', '/api/albums', 'fixture:albums');
    cy.visit('/');

    cy.get('[data-cy=Card]').should('have.length', 7);
  });
});
```

- Add `src/client/index.css` to apply global `box-sizing: border-box`.

```css
/*  src/client/index.css */

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

- Install `styled-components` and `babel-plugin-styled-components`

```bash
yarn add styled-components
yarn add -D babel-plugin-styled-components
```

If you like styled-components but don't like how it turns your class names into rubbish hashes, `babel-plugin-styled-components` prepends those hashes with BEM-style names based on the names of the actual components.

```js
// .babelrc
{
  "presets": ["env", "react"],
  "plugins": ["transform-object-rest-spread", "babel-plugin-styled-components"]
}
```

- Touch `src/client/components/Card.js`

```js
// src/client/components/Card.js

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 310px;
  padding: 1em 0.5em;
  box-shadow: 1px 4px 2px 1px #aaa;
  margin: 0.5em;
  background: #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 1px 4px 2px 2px #aaa;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardImageWrapper = styled.div`
  position: relative;
  height: 294px;
  width: 294px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CardBody = styled.div`
  display: flex;
  background: #ddd;
  padding: 0.5em;
  width: 100%;
`;

const CardDetails = styled.div`
  flex: 60%;

  h3 {
    margin: 0;
    line-height: 1.5;
    word-break: break-word;
  }

  p {
    margin: 0;
  }

  & > h3 + p {
    margin-top: 0;
    word-break: break-all;
  }
`;

const CardControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 2em;
  justify-content: center;
  align-items: center;
`;

const CardButton = styled.button`
  padding: 0.25em;
  background: transparent;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardWrapper data-cy="Card">
        <CardImageWrapper>
          <CardImage src={this.props.art} />
        </CardImageWrapper>
        <CardBody>
          <CardDetails>
            <h3>{this.props.title}</h3>
            <p>by {this.props.artist}</p>
            <p>{this.props.year}</p>
          </CardDetails>
          <CardControls>
            <CardButton aria-label="Edit this album">Edit</CardButton>
            <CardButton aria-label="Delete this album">Delete</CardButton>
          </CardControls>
        </CardBody>
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  artist: PropTypes.string,
  art: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
};
Card.defaultProps = {
  art: 'http://via.placeholder.com/300x300',
  title: 'Unknown title',
  artist: 'Unknown artist',
  year: 'Unknown year'
};
export default Card;
```

- Use the `Card` component within the `CardGrid` component, passing each `album` object property down as a prop to `Card`

```js
// src/client/components/CardGrid.js

// ...imports

import Card from './Card';

const CardGrid = props => (
  <div data-cy="CardGrid">
    {props.albums !== null
      ? props.albums.map(album => <Card {...album} key={album._id} />)
      : null}
  </div>
);
```

- Run the test again or if `Cypress` is still open, refresh it. It should now pass.

We've just barely scratched the surface of what we can do with Cypress. More to come.

Source: [https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App](https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App)

### Setup Enzyme

- Install `enzyme` and `enzyme adapter`

```bash
yarn add --D enzyme enzyme-adapter-react-16 enzyme-to-json
```

- Touch `setupTests.js`

```js
// setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

- Add `setupTestFrameworkScriptFile` path to `jest` config in `package.json`

```js
// package.json

  "jest": {
  //...other config
    "setupTestFrameworkScriptFile": "./setupTests.js"
  },
```

- Touch `src/client/__tests__/Card.test.js`

```js
// src/client/__tests__/Card.test.js

import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card';

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a card title by default', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('h3').text()).toBe('Unknown title');
  });
});
```

TODO: review [https://www.robinwieruch.de/react-testing-tutorial/](https://www.robinwieruch.de/react-testing-tutorial/)

### Setup Storybook

As mentioned earlier, storybook is particularly well-suited for quickly prototyping and visually tweaking components in isolation. I'll use other tools like `Jest/Enzyme` and `Cypress` for testing functionality integration but `Storybook` will be my atomic playground.

The setup is easy, and it's really satisfying to have this extra little dev server for tinkering with components.

- Install `Storybook` globally and run `get storybook`

```bash
npm i -g @storybook/cli
getstorybook
```

- `Storybook` will install all dependencies and automatically add nom scripts to `package.json`.

The project now looks like this:

```txt
├── README.md
├── cypress
│   ├── fixtures
│   │   └── albums.json
│   ├── integration
│   │   └── app-init.spec.js
│   ├── plugins
│   │   └── index.js
│   ├── screenshots
│   │   └── my-image.png
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── index.html
├── nodemon.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── setupTests.js
├── src
│   ├── client
│   │   ├── App.js
│   │   ├── __tests__
│   │   │   ├── Card.test.js
│   │   │   └── __snapshots__
│   │   ├── components
│   │   │   ├── Card.js
│   │   │   └── CardGrid.js
│   │   ├── index.css
│   │   ├── index.js
│   │   └── lib
│   │       └── service.js
│   └── server
│       ├── database
│       │   └── index.js
│       ├── index.js
│       ├── models
│       │   └── index.js
│       ├── routes
│       │   ├── index.js
│       │   └── index.test.js
│       └── sampledata.json
├── stories
│   └── index.stories.js
├── webpack.config.js
└── yarn.lock
```

- Run `storybook` to start the dev server on port 6006

```bash
yarn storybook
```

- Import a component and add a story to `stories/index.stories.js`

```js
import React from 'react';
// ...boilerplate imports
import { storiesOf } from '@storybook/react';

import Card from '../src/client/components/Card';

// ...boilerplate stories

storiesOf('Card', module).add('default', () => <Card />);
```

Storybook runs outside of your app, and really forces you to think about how your components look and function in isolation. This is great if you any notion of reusing them elsewhere or building up a UI library. But keep in mind, you'll have to bring or mock your own state, global styles, and Webpack configuration.

One example already evident with this first story is that the box-sizing styles I imported into the `index.js` of the React app have no effect here

Another example that will come up soon is that I'll want to use Webpack for loading SVG icons, which means I'll need to extend `webpack.config.js` in `.storybook/` in addition to `webpack.config.js` at the root of the project.

Some things are not immediately intuitive. But the small hurtles will challenge you to create more usable, modular, and reusable UI.
