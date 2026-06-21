import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="main">
      <Dashboard />
    </section>
  );
}

export default App;
