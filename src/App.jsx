import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
