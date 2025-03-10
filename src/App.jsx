import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
//import Surface from "./components/Surface/Surface"


function App({data}) {
  const link = window.location.pathname.includes('ref') ? "https://t.me/egeball20_bot?start=6186465800" : "https://t.me/egeball20_bot";

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
  }, 100);
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Main data={data}/>
        <Footer/>
        <a href={link} className="app__circle" target="_blank">
          <img src="logo_tg.png" alt="logo telegram" />
        </a>
        {/* <Surface /> */}
      </div>
      
    </BrowserRouter>
  )
}

export default App
