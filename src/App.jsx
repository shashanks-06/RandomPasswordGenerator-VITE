import "./App.css";
import { FaRegCopy } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  const copyPassword = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Copied"))
      .catch((err) => console.error("Failed to Copy: ", err));
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
          <CopyToClipboard text={password} onCopy={copyPassword}>
            <button id="copy-icon">
              <FaRegCopy />
            </button>
          </CopyToClipboard>
        </div>
        <button onClick={passwordHandler}>
          <BsLightningChargeFill id="generate-icon" /> Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
