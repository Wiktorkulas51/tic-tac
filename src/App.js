import "./App.css";
import Box from "./box";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("cross");
  const toggleOnclick = () => {
    if (state === "cross") {
      return setstate("circle");
    } else if (state === "circle") {
      return setstate("cross");
    }
  };

  return (
    <div className="App">
      <button
        className={`btn ${state === "circle" ? "circle" : "cross"}`}
        onClick={toggleOnclick}
      ></button>
      <Box className="box 1" state={state}></Box>
      <Box className="box 2" state={state}></Box>
      <Box className="box 3" state={state}></Box>
      <Box className="box 4" state={state}></Box>
      <Box className="box 5" state={state}></Box>
      <Box className="box 6" state={state}></Box>
      <Box className="box 7" state={state}></Box>
      <Box className="box 8" state={state}></Box>
      <Box className="box 9" state={state}></Box>
    </div>
  );
}

export default App;
