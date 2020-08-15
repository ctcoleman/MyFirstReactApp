# My First React App with Components

## Overview
This was my first time developing a react application and understanding it. This is probably my 4th or 5th project with React. This project was completed from a video on pluralsight by Samer Buna of JSComplete. This was really fun. After messing around with the past examples I decided to take the app a step further by dividing the components into seperate .js files and importing/exporting them to the App.js. Then, using the React.render method in index.js I edited the div in the index.html file to display the application.
The application is made of 2 components a button component and a display component. These components are dynamic which I show through multiple renderings of the components which all behavior differently depending on the props passed to them. The buttons each increment or decrement the value displayed on the screen depending on their value.
Please feel free to through some comments to me about the application (anything you would have done differently). I would love to hear how somebody else would have went about developing this simple React application.

## Sec 3. Button Component (./src/components/Button.js)
1) import React and the useState hook from the react dependency
2) create the `Button` component that accepts props as a param
3) inside the `Button` component is the `handleClick` anon func which calls the `onClickFunction` passed in through props
4) the `onClickFunction` is passed in a parameter, which is also passed in through props as `value`
5) the `Button` component returns a basic jsx/html button with an `onClick` handler which calls the `handleClick` func
6) the buttons text value (between the opening and closing button tags) is set to the same `value` passed in through props
7) finally we export the Button component to any file that dares import it ;)

## Sec 2. Display Component (./src/components/Display.js)
1) import React from the react depend
2) create the `Display` compnent which accepts props as a param
3) the `Dipslay` component returns a JSX/HTML div with the value of `message` which is passed in through props
4) export the Display component to any file that dares import it ;)

## Sec 3. The Complete Application (./src/App.js)
1) import React and the useState hook from react dep, import the styling from the css file, import the compoenents from their paths
2) create the App function to be exported to the DOM
3) use the useState hook to create the counter variable and the setCounter function with a useState hardcoded in
4) create an increment/decrementCounter function that will increase the value of counter by whatever value is passed through the params
5) the App returns a JSX/HTML div with some headings and the Display/Button Compnents
  - the Display compnent is called only once with the counter variable passed in as the message prop
  - the Button component is called 8x
  - each component is hardcoded a different value to increase/decrease by
  - each compnoent passes an onClickFunction that either increase or decreases the counter by the hard-coded value
6) export the application by default so it may be imported