import "./App.css";
import { FaRegCopy } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          <span>Random Password</span>
        </h1>
        <div className="display">
          <input type="password" placeholder="Password" id="password" />
          <FaRegCopy id="copy-icon" />
        </div>
        <button>
          <BsLightningChargeFill id="generate-icon" /> Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
