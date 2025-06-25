import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import GrayCard from "./components/GrayCard";
import GreenCard from "./components/GreenCard";
import BlackCard from "./components/BlackCard";
import LetsMake from "./components/LetsMake";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Herosection />
      <Companies />
      <GrayCard />
      <LetsMake />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
