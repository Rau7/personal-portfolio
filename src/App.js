import "./General.css";
import Navbar from "../src/components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Landing />
      <About />
      <Stack />
    </div>
  );
}

export default App;
