import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Surface from "./components/Surface/Surface"

function App({data}) {

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Main data={data}/>
        <Footer/>
        <a href="https://t.me/egeball14_bot" className="app__circle" target="_blank">
          <img src="logo_tg.png" alt="logo telegram" />
        </a>
        {/* <Surface /> */}
      </div>
      
    </BrowserRouter>
  )
}

export default App
