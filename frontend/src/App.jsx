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
import chatLinkStore from "./store/chatLinkStore"
import FolderLinkStore from "./store/folderLink"
import reloadImage from './assets/images/reload.png'
//import Surface from "./components/Surface/Surface"

const App = observer(({data}) => {
  const [isAuth, setIsAuth] = useState(false);
  const tgLink = `https://t.me/${botLinkStore.link}`

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
      const response = await axios.get(`https://${window.location.host}/api/api/bot-link/base`);
      botLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getBotComLink = async () => {
    try {
      const response = await axios.get(`https://${window.location.host}/api/api/bot-link/egeball.com`);
      botLinkStore.setComLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getBotOrgLink = async () => {
    try {
      const response = await axios.get(`https://${window.location.host}/api/api/bot-link/egeball.org`);
      botLinkStore.setOrgLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getChannelLink = async () => {
    try {
      const response = await axios.get(`https://${window.location.host}/api/api/channel-link`);
      channelLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getChatLink = async () => {
    try {
      const response = await axios.get(`https://${window.location.host}/api/api/chat-link`);
      console.log(response);
      
      chatLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getFolderLink = async () => {
    try {
      const response = await axios.get(`https://${window.location.host}/api/api/folder-link`);
      console.log(response.data);
      
      FolderLinkStore.setLink(response.data);
    } catch (error) {
      console.log(error);
    }
  }

 const clearCache = async () => {
  try {
    // localStorage
    localStorage.clear();

    // sessionStorage
    sessionStorage.clear();

    // Cache Storage
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(name => caches.delete(name))
      );
    }

    // IndexedDB
    if (indexedDB.databases) {
      const databases = await indexedDB.databases();
      await Promise.all(
        databases.map(db => {
          if (db.name) {
            return new Promise((resolve, reject) => {
              const request = indexedDB.deleteDatabase(db.name);
              request.onsuccess = resolve;
              request.onerror = reject;
              request.onblocked = resolve;
            });
          }
        })
      );
    }

    // ❗ УДАЛЯЕМ SERVICE WORKERS
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map(reg => reg.unregister())
      );
    }

    // ❗ Cookies
    document.cookie.split(";").forEach(cookie => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    console.log("Максимально возможная очистка выполнена");

    // Жёсткая перезагрузка
    window.location.reload(true);

  } catch (err) {
    console.error("Ошибка при очистке:", err);
  }
};

  useEffect(() => {
    checkAuth();
    getBotLink();
    getBotComLink();
    getBotOrgLink();
    getChannelLink();
    getChatLink();
    getFolderLink();
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
          <img src={`https://${window.location.host}/logo_tg.png`} alt="logo telegram" />
        </a>
        {/* <Surface /> */}
      </div>
      
    </BrowserRouter>
  )
})

export default App;
