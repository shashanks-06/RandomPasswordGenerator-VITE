import "./App.css";
import { FaRegCopy } from "react-icons/fa";

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
      </div>
    </>
  );
}

export default App;
