<p align="center">
  <a href="https://www.gatsbyjs.org/starters">
    <img alt="gatsby" src="https://github.com/rickkln/gatsby-starter-simple/blob/master/src/images/gatsby-icon.png?raw=true" width="180" />
  </a>
</p>

<h1 align="center">
  Gatsby Simple Starter
</h1>

This is a simple starter for [Gatsby](https://www.gatsbyjs.org) based on on the [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default).

## 🔦 Uses in production
- Demo for this starter: [simple.rickkln.com](https://simple.rickkln.com)
- My personal site: [rickkln.com](https://rickkln.com)
- This Coronavirus Pandemic Tracker: [corona.rickkln.com](https://corona.rickkln.com)
 
## 🔃 Comparison with the default Gatsby starter

1.  [TypeScript](https://www.typescriptlang.org/) is used for a better developer experience.

1.  [ESLint](https://eslint.org/) and the [AirBnB](https://github.com/airbnb/javascript) TypeScript style guide help you avoid, and fix, simple issues in your code.

1. The default Gatsby formating tool, [Prettier](https://prettier.io/), has been removed in order to avoid conflicts with the ESLint + AirBnB TypeScript tools described above.

1. [Firebase Hosting](https://firebase.google.com/docs/hosting/) is supported and configured for Gatsby from the start.

1. [Blog posts](https://gatsby-starter-simple.web.app/blog/example-post) are implemented from the start via Gatsby dynamic pages, you can simply add any markdown file to the posts directory with the appropriate frontmatter.

## 🚀 Quick start

1.  **Fork or clone this repository.**

    Use the fork button on the [Github repository](https://https://github.com/rickkln/gatsby-starter-simple), or clone the repo as follows:

    ```shell
    # Clone the repo
    git clone https://github.com/rickkln/gatsby-starter-simple.git my-new-site
    ```

1.  **Navigate into the cloned folder.**

    Navigate into your new site’s directory, install the libraries and start it up:

    ```shell
    cd my-new-site/
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing.**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-new-site` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

1.  **Deploy your new site!**

    Once you are ready to deploy your changes you can do so using Firebase, or your hosting provider of choice. If you choose to go with firebase you can use the default configuration in the project.

    Simply follow the instructions on the [Firebase website](https://firebase.google.com/docs/hosting/quickstart) to initialize and connect the firebase CLI.

    Once Firebase CLI is connected to your Firebase project you are ready to deploy:

    ```shell
    # To build the Gatsby site and deploy to Firebase hosting in one go
    npm run deploy
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    ├── .eslintrc.js
    ├── .gitignore
    ├── firebase.json
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE.md
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool to help you avoid and fix simple issues in your code.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`firebase.json`**: This is a configuration file that lists your Firebase project configuration. Learn more about this file in the [Firebase docs](https://firebase.google.com/docs/hosting/full-config).

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`LICENSE.md`**: Gatsby itself, along with the code for this starter are licensed under the MIT license.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: This text file, which contains useful reference information about your project.

1.  **`tsconfig.json`**: This is a configuration file for TypeScript. The tsconfig.json file specifies the root files and the compiler options required for the TypeScript compiler to compile the project. More details are available in the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## 🎓 Need some help with Gatsby?

While you're welcome to fork and use this code, as per the license below, I don't have time to help you fix issues. If you are looking for more guidance you can use the [official documentation for Gatsby](https://www.gatsbyjs.org/). Here are some useful places to start:

- **The official [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **The Gatsby [code samples](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

- **The documentation on the [TypeScript Plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/).** This is specifically useful if you are forking this project, as it uses TypeScript.

## 📝 License

The original code in this repo is licensed under the MIT License. For more information view the [LICENSE](https://github.com/rickkln/gatsby-starter-simple/blob/master/LICENSE.md) file.
