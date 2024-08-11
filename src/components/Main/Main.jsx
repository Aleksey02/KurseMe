import classes from './Main.module.scss'
import Home from "./Home/Home"
import {Route, Routes} from 'react-router-dom'
import School from './School/School'

function Main(){
    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/11' element={<School />} />
                <Route path='/9' element={<School />} />
            </Routes>
        </main>
    )
}

export default Main