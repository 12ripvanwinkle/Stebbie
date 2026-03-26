import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
    </BrowserRouter>
  );
}

export default App;