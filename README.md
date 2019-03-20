# Red Ventures Challenge

Hi, my name is Gustavo Sales and this is the project to Red Ventures Frontend Challenge :)

## A little about

The main stack of this project is React, Redux and NextJS. I choosed all of this, because they are powerful frameworks, a lot of big companies use them, they can make all process easily and have a giant community.

About NextJS, it has has a real good thing: the Server Side Render (SSR), so the first http request (to get all json data) came from backend, this is very, very nice! Another cool thing is the SEO with SPA, since the SSR help with this process to render all on page source code.

So, to conclude, I have used a lot of other packages to make the project and the way easer. Packages like "jest" for unit tests, anothers of redux for middlewares, for http request the "axios" and many others. Also I have used packages on dev environment to make the code clean, organized like the linters (ecma and style) and a little one which I like so much called "husky", to make scripts for pre commits just with staged files.

## How to execute the project?

First you must have installed the nodejs version 10 and npm version 6 (or later to both).

This command below will run the project with final build, like it would run on qa or production environment.

Run the scripts below:

```bash
npm ci
npm start
```

This will run on `http://localhost:3000`.

### Important notes

* *if you want to run with nodejs version 8 you may change the `engine` prop on `package.json`.*

## How to execute in a dev environment?

The nodemoon will run the dev environment server to make changes.

```
npm run local
```

This will run on `http://localhost:9000`.

### Important notes

* *nextjs has a little bug on realtime execution (I mean, dev environment) you may need to refresh the pages to load all css correctly. The problem will not happen on buildtime execution (another words: prod environment).*

## How to execute the tests?

You may run unit tests created with jest, just run the command below:

```
npm t
```

## Last words

Thanks for the opportunity, and thanks for read until here, see you around :)
