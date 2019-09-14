# NPM

### What is it?
`npm` stands for `node package manager`. It is a command line tool (terminal) that helps us manage our dependencies, install and run our application easier.

### Why do I need it?
If you want to use any open source tools in your project like React, Vue, Bootstrap, live server, etc, you need some way of managing them in your project. `npm` manages all that for us with a few simple steps.

### How do I get it?
You automatically get `npm` when you install [node](https://nodejs.org/en/).

### How do I start a new project?
You only have to do this once when you first start the project
- open terminal
- cd to your project
  - `cd /Desktop/my-project`
- run `npm init`

### Popular commands
#### `npm init`
To initialize a directory as a new project. You only need to do this once when you first start the project. This will generate a `package.json` in your project directory. If you already have a `package.json` you don't need to run this again.

#### `npm install`
To install all the dependencies specified in `package.json`

#### `npm install live-server`
To install `live-server` (or any other npm package) and add it to your `package.json` so that next time you or anyone else installs the project on their machine they won't have to remember what tools to install.

#### `npm start`
To run the command in your `package.json` that is in front of `scripts.start`. You have to add this manually first time. `npm init` does not generate this automatically. In our case we put `"start": "live-server"` in our `package.json` which means when I run `npm start` I want to use live server.
