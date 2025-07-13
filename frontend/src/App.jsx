import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { getTokenFromLocalStorage } from "./helper/localstorage.helper"
import { AuthService } from "./services/auth.service"
//import Surface from "./components/Surface/Surface"


function App({data}) {
  const [isAuth, setIsAuth] = useState(false);
  const {pathname} = window.location;
  const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";

  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();
    try {
      if(token){
        const data = await AuthService.getProfile();

        if(data){
          setIsAuth(data);
        } else{
          setIsAuth(false);
        }
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
  }, 100);
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Main data={data} isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Footer/>
        <a href={`https://t.me/egeball21_bot${refLink}`} className="app__circle" target="_blank">
          <img src="https://egeball.com/logo_tg.png" alt="logo telegram" />
        </a>
        {/* <Surface /> */}
      </div>
      
    </BrowserRouter>
  )
}

export default App
