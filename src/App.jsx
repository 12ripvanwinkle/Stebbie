import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import RSVP from "./sections/RSVP";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative gradient-hero overflow-hidden gradient-hero-wrapper">
        <Hero />
        <RSVP />
      </div>
    </BrowserRouter>
  );
}

export default App;