import "./App.css";
import { FaRegCopy } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const passwordGenerator = (length) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+|=-{}[]:;<>~/?";
    const allChars = lowerCase + upperCase + numbers + symbol;

    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password;
  };

  const passwordHandler = () => {
    const newPassword = passwordGenerator(15);
    setPassword(newPassword);
    console.log(newPassword);
  };

  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          <span>Random Password</span>
        </h1>
        <div className="display">
          <input
            type="text"
            value={password}
            placeholder="Password"
            id="password"
            onChange={passwordHandler}
          />
          <FaRegCopy id="copy-icon" />
        </div>
        <button onClick={passwordHandler}>
          <BsLightningChargeFill id="generate-icon" /> Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
