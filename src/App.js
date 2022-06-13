import "./General.css";
import Navbar from "../src/components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
