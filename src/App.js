// Sec 3. in README.md
// 1 in README.md
import React, { useState } from "react";
import "./styles.css";
import Display from "./components/Display";
import Button from "./components/Button";

// 2 in README.md
function App() {
  // 3 in README.md
  let [counter, setCounter] = useState(0);
  // 4 in README.md
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  const decrementCounter = (decrementValue) =>
    setCounter(counter - decrementValue);

  // 5 in README.md
  return (
    <div>
      <h1>Button App Example</h1>
      <h2>Amount</h2>
      <Display message={counter} />
      <h2>Increase</h2>
      <Button value={1} onClickFunction={incrementCounter} />
      <Button value={5} onClickFunction={incrementCounter} />
      <Button value={10} onClickFunction={incrementCounter} />
      <Button value={100} onClickFunction={incrementCounter} />
      <h2>Decrease</h2>
      <Button value={1} onClickFunction={decrementCounter} />
      <Button value={5} onClickFunction={decrementCounter} />
      <Button value={10} onClickFunction={decrementCounter} />
      <Button value={100} onClickFunction={decrementCounter} />
    </div>
  );
}

// 6 in README.md
export default App;
