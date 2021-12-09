import "./App.css";
import Box from "./box";

function App() {
  const [state, setstate] = useState("cross");
  const toggleOnclick = () => {
    if (state === "cross") {
      return setstate("circle");
    } else {
      return setstate("cross");
    }
  };
  return (
    <div className="App">
      <button onClick={toggleOnclick()}></button>
      <Box className="box 1"></Box>
      <Box className="box 2"></Box>
      <Box className="box 3"></Box>
      <Box className="box 4"></Box>
      <Box className="box 5"></Box>
      <Box className="box 6"></Box>
      <Box className="box 7"></Box>
      <Box className="box 8"></Box>
      <Box className="box 9"></Box>
    </div>
  );
}

export default App;
