/* eslint-disable */
import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header.js';
import Main from "./components/main/main";
import Slider from './components/slider/slider.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
