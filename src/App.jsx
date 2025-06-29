import "./App.css";
import AboutUs from "./components/About";
import Carousel from "./components/CarouselPage";
import Footer from "./components/Footer";
import SearchBar from "./components/search";
function App() {
  return (
    <>
      <SearchBar />
      <AboutUs />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
