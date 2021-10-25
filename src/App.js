/* eslint-disable */
import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header.js';
import Main from "./components/main/main";
import Slider from './components/slider/slider.js';
import Footer from './components/footer/footer.js';
import {createContext, useEffect, useState} from "react";
import Scroll from "./components/header-scroll/scroll";

export const Store = createContext(null);


function App() {
    const [ lang, setLang ] = useState('en');
    useEffect(() => {console.log('render')})
  return (

          <div className="App">
              <Store.Provider value={{setLang}}>
              <Scroll />
              <Header />
              <Main />
              <Slider />
              <Footer />
              </Store.Provider>
          </div>

  );
}

export default App;
