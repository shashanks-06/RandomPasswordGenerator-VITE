import "./App.css";
import { FaRegCopy } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          Random Password
        </h1>
        <div className="display">
          <input type="password" placeholder="Password" id="password" />
          <FaRegCopy id="copy-icon"/>
        </div>
      </div>
    </>
  );
}

export default App;
