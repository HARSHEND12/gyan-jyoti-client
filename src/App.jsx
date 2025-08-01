import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Register />
      <Contact />
    </div>
  );
}

export default App;

