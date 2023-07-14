import ColorInput from "./components/ColorInput/ColorInput";
import ColorContainer from "./components/ColorContainer/ColorContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div id="App">
      <main id="container">
        <ColorContainer color={color} />
        <ColorInput color={color} setColor={setColor} />
      </main>
    </div>
  );
}

export default App;
