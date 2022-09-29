import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const [info, setInfo] = useState({});
  return (
    <div className="divapp">
      <LandingPage info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
