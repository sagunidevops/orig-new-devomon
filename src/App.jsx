import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import TouchForm from "./components/homepage/TouchForm";
import ComingSoon from "./components/common/ComingSoon";
import AboutCard from "./components/homepage/AboutCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero/>
      <About/>
      <TouchForm/>
        <ComingSoon/>
        <AboutCard />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
