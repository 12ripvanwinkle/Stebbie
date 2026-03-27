import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import RSVP from "./sections/RSVP";
import Timeline from "./sections/Timeline";
import Venue from "./sections/Venue";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative gradient-hero overflow-hidden gradient-hero-wrapper">
        <Hero />
        <RSVP />
        <Timeline />
        <Venue />
      </div>
    </BrowserRouter>
  );
}

export default App;