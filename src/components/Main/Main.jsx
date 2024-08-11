import classes from './Main.module.scss'
import Home from "./Home/Home"
import {Route, Routes} from 'react-router-dom'

function Main(){
    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </main>
    )
}

export default Main