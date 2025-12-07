import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { getTokenFromLocalStorage } from "./helper/localstorage.helper"
import { AuthService } from "./services/auth.service"
import { observer } from "mobx-react-lite";
import botLinkStore from "./store/botLink"
import axios from "axios"
import channelLinkStore from "./store/channelLinkStore"
import reloadImage from './assets/images/reload.png'
//import Surface from "./components/Surface/Surface"


const App = observer(({data}) => {
  const [isAuth, setIsAuth] = useState(false);
  const {pathname} = window.location;
  const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";
  const tgLink = `https://t.me/${botLinkStore.link}${refLink}`

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

  const getBotLink = async () => {
    try {
      const response = await axios.get('https://egeball.com/api/api/bot-link/base');
      botLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getBotComLink = async () => {
    try {
      const response = await axios.get('https://egeball.com/api/api/bot-link/egeball.com');
      botLinkStore.setComLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getBotOrgLink = async () => {
    try {
      const response = await axios.get('https://egeball.com/api/api/bot-link/egeball.org');
      botLinkStore.setOrgLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getChannelLink = async () => {
    try {
      const response = await axios.get('https://egeball.com/api/api/channel-link');
      channelLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const clearCache = async () => {
  try {
      // Очистка localStorage
      localStorage.clear();

      // Очистка sessionStorage
      sessionStorage.clear();

      // Очистка Cache Storage (кеш сервис-воркера)
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(cache => caches.delete(cache)));
      }

      try {
        
        const databases = await indexedDB.databases();
        await Promise.all(databases.map(db => indexedDB.deleteDatabase(db.name)));
      }
      catch (err) {
        console.error("Ошибка при очистке IndexedDB:", err);
      }

      window.location.reload();
      // Очистка IndexedDB

      console.log("Все хранилища и кэши очищены");
    } catch (err) {
      console.error("Ошибка при очистке кэша:", err);
    }
  };

  useEffect(() => {
    checkAuth();
    getBotLink();
    getBotAuthLink();
    getChannelLink();
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
        <button className="app__circle--reload" onClick={clearCache}>
          <img src={reloadImage} alt="reload button" />
        </button>
        <a href={tgLink} className="app__circle" target="_blank">
          <img src="https://egeball.com/logo_tg.png" alt="logo telegram" />
        </a>
        {/* <Surface /> */}
      </div>
      
    </BrowserRouter>
  )
})

export default App;
