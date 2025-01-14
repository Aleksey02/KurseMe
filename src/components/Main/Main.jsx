import classes from './Main.module.scss'
import Home from "./Home/Home"
import {Route, Routes} from 'react-router-dom'
import School from './School/School'
import Subjects from './Subjects/Subjects'

function Main({data}){
    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={<Home advantages={data['advantages']} faq={data['faq']}/>} />
                <Route path='/ref' element={<Home advantages={data['advantages']} faq={data['faq']}/>} />
                <Route path='/11' element={<School data={data['11']} />} />
                <Route path='/ref/11' element={<School data={data['11']} />} />
                <Route path='/11/:school' element={<Subjects data={data['11']} />} />
                <Route path='/ref/11/:school' element={<Subjects data={data['11']} />} />
                <Route path='/9' element={<School data={data['9']} />} />
                <Route path='/ref/9' element={<School data={data['9']} />} />
                <Route path='/9/:school' element={<Subjects data={data['9']} />} />
                <Route path='/ref/9/:school' element={<Subjects data={data['9']} />} />
            </Routes>
        </main>
    )
}

export default Main