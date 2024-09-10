//====================================PROPS=======================================//

import "./App.css";
import Home from "./Task";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

//===========================================useState====================================//

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  console.log("re-render");

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;

//==============================CẦN SỬA=------------------------//

//==============CODE NAY EM KHONG UPDATE DUOC CONG VIEC CUA 1 NHAN VIEN VAO TRONG ARRAY===========================/
import { useState } from "react";

function App() {
  const [NV, setNV] = useState(["A", "B", "C"]);

  const handleUpdate = () => {
    setNV((prevState) => {
      return [...prevState, "D"];
    });
  };

  console.log(NV);
  return (
    <div>
      <h1>F</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
