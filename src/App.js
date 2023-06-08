import Home from "./components/Home";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Name />
    </div>
  );
}
