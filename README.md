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

