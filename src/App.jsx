import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import RSVP from "./sections/RSVP";
import Timeline from "./sections/Timeline";
import Venue from "./sections/Venue";
import Gifts from "./sections/Gifts";
import Faqs from "./sections/faqs";
import Footer from "./Footer";
import OurStory from "./sections/OurStory";
import Photos from "./sections/Photos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative gradient-hero overflow-hidden gradient-hero-wrapper">
        <Hero />
        <RSVP />
        <Timeline />
        <Venue />
        <Gifts />
        <OurStory />
        <Photos />
        <Faqs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;