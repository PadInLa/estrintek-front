import { useState } from "react";
import "./styles/App.css";
import Layout from "./components/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout />
      <Layout />
    </div>
  );
}

export default App;
