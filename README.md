# react-embed-github-file-content

React component to embed the content of a file from GitHub.

## Installation

To install the package run:

```bash
npm install react-embed-github-file-content
```

## Usage

Import `React` and the `EmbedGitHubFileContent` component:

```js
import React from "react";
import EmbedGitHubFileContent from "react-embed-github-file-content";
```

Add it to your jsx:

```js
<EmbedGitHubFileContent
  url="https://github.com/peterrhodesdev/react-embed-github-file-content/blob/main/src/index.js"
  loadingComponent={<p>Loading...</p>}
  errorComponent={<p>Error</p>}
  onLoad={() => console.log("onLoad")}
  onError={() => console.error("onError")}
  />
```

### PrismJS

To use this component with [prism.js](https://www.npmjs.com/package/prismjs) for syntax highlighting first install the prism.js package:

```bash
npm install prismjs
```

Then import the package along with the CSS theme you want to apply:

```js
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
```

Finally, call `Prism.highlightAll()` after the component has loaded. For example:

```js
<EmbedGitHubFileContent
  url="https://github.com/peterrhodesdev/react-embed-github-file-content/blob/main/src/index.js"
  loadingComponent={<p>Loading...</p>}
  errorComponent={<p>Error</p>}
  onLoad={() => Prism.highlightAll()}
  onError={() => console.error("onError")}
  />
```

## Edit

In order to edit this package and run it locally you will need to have [nwb](https://www.npmjs.com/package/nwb) installed:

```bash
npm i -g nwb
```

Then, after you've cloned the repo, build the package with the following command:

```bash
npm run build
```

You can then install it in a local project.

> Note, do **NOT** run `npm install` in this package. If you do then when you install the package in a local project there will be errors. You will need to delete the `node_modules` folder and reinstall to fix the errors.
