import "./App.css";
import MainInfo from "./components/Main info/MainInfo";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <MainInfo />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
