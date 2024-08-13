import Header from "./components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App({data}) {

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Main data={data}/>
        <Footer/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
