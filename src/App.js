import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Crousal from "./components/Crousal";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Crousal />
      <Footer />
    </>
  );
}

export default App;
