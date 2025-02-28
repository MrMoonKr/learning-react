# Chapter 1 : Introduction

The widespread use of React on large websites shows that it is stable enough to use at scale. React is ready.

## DevOps

- Windows 10 Pro
- nvm for windows v1.1.10
- node v20.10.0 and npm v10.2.3
- VS Code @latest
- react v18.2.0 , react-dom v18.2.0 , create-react-app v5.0.1
- webpack v5.90.3 , webpack-cli v5.1.4

## 함수형 컴포넌트에 JSDoc 하는법

- 인텔리 센스 동작을 위해 다음과 같이 주석을 하세요.
```
import React from 'react';

/**
 * React 함수형 컴포넌트
 * @param {Object} props - 컴포넌트에 전달되는 프로퍼티 객체
 * @param {string} props.name - 이름
 * @param {number} props.age - 나이
 * @returns {JSX.Element} - 렌더링할 JSX 요소
 */
function MyComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default MyComponent;

```


## Installing Node.js and NPM

When working with Node and React, you will need to use the command line. On the Mac, this is called the Terminal. On a PC,
it is called the Command Prompt. Run the following commands to check your current version on node and npm. If needed,
instructions on how to install or upgrade are below.

First, check to see if you have Node.js installed:

```
$ node -v
```

If this returns a version number, Node.js is installed. If the command is not found, you'll need to [install Node.js](https://nodejs.org/en/) from the Node.js website. Download the installer, run it, and follow the instructions.

---

Next, check your version of npm:

```
$ npm -v
```

Then, if you are running anything less than version 8, you will need to update npm:

### Update npm on Mac

```
$ sudo npm update -g npm
```

### Update npm on PC

Make sure to run the Command Prompt with administrator privileges:

```
$ npm update -g npm
```

##### Optionally install Yarn

Yarn is a package manager created at Facebook. It is a compatible alternative to npm. Yarn's use is not required,
but you can optionally install it if you like:

```
$ sudo npm install -g yarn
```

Finally, there are some nice options for switching Node versions. This is not required, but you can
optionally install one of these version mangers:

- [Install Node Version Manager - mac only (optional)](https://github.com/creationix/nvm)
- [Install NVM-Windows - pc only (optional)](https://github.com/coreybutler/nvm-windows)

---

## Installing the React Tools

Next, install the React developer tools:

- Development Tools ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) |
  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

## Working with the Files

This repository links to samples hosted on various platforms, so that you can immediately begin interacting with the files. For smaller samples, we've linked to JSBins to allow you to run the sample with limited overhead. We also have links to CodeSandboxes and other repos if the samples are more in-depth.

## React Resources

Finally, we have some links to resources and official documentation for the libraries that we will be using:

- [React Documentation](https://facebook.github.io/react/index.html)
- [React Source](https://github.com/facebook/react)
- [React Blog](https://facebook.github.io/react/blog/)
- [React NPM](https://www.npmjs.com/package/react)
- [webpack Documentation](https://webpack.js.org/)
- [Jest Documentation](https://facebook.github.io/jest/)
- [React Router Documentation](https://reacttraining.com/react-router/)
