import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const [dados, setDados] = useState({});
  return (
    <div className="divapp">
      <LandingPage dados={dados} setDados={setDados} />
    </div>
  );
}

export default App;
