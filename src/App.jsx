import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(event, inputType) {
    setUserInput((prevInvestment) => {
      return { ...prevInvestment, [inputType]: +event };
    });
  }

  return (
    <>
      <Header logo={logo} title="Investment Calculator" />;
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater then 0.</p>
      )}
      {inputIsValid && <Results investmentData={userInput} />}
    </>
  );
}

export default App;
