import classes from './Main.module.scss'
import Home from "./Home/Home"
import {Route, Routes} from 'react-router-dom'
import School from './School/School'
import Subjects from './Subjects/Subjects'
import Admin from '../../pages/Admin/Admin'
import Classes from '../../pages/Admin/Classes'
import Links from '../../pages/Admin/Links'
import SchoolAdmin from '../../pages/Admin/SchoolAdmin'
import SubjectAdmin from '../../pages/Admin/SubjectAdmin'
import Auth from '../../pages/Auth/Auth'
import Account from '../../pages/Account/Account'
import Partnership from '../../pages/Partnership/Partnership'
import SetCookie from '../../pages/SetCookie/SetCookie'
import RedirectAI from '../../pages/RedirectAI/RedirectAI'
import Player from '../../pages/Player/Player'

function Main({data, isAuth, setIsAuth}) {
    
    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={<Home advantages={data['advantages']} faq={data['faq']}/>} />
                <Route path='/:id' element={<Home advantages={data['advantages']} faq={data['faq']}/>} />
                <Route path='/11' element={<School data={data['11']} />} />
                <Route path='/:id/11' element={<School data={data['11']} />} />
                <Route path='/11/:school' element={<Subjects data={data['11']} />} />
                <Route path='/:id/11/:school' element={<Subjects data={data['11']} />} />
                <Route path='/9' element={<School data={data['9']} />} />
                <Route path='/:id/9' element={<School data={data['9']} />} />
                <Route path='/9/:school' element={<Subjects data={data['9']} />} />
                <Route path='/:id/9/:school' element={<Subjects data={data['9']} />} />
                <Route path='/admin' element={<Admin isAuth={isAuth} />} />
                <Route path='/admin/classes' element={<Classes isAuth={isAuth} />} />
                <Route path='/admin/classes/:classAdmin' element={<SchoolAdmin />} />
                <Route path='/admin/classes/:classAdmin/:schoolId' element={<SubjectAdmin />} />
                <Route path='/admin/links' element={<Links isAuth={isAuth} />} />
                <Route path='/auth' element={<Auth setIsAuth={setIsAuth}/>} />
                <Route path='/account' element={<Account isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path='/partnership' element={<Partnership />} />
                <Route path='/:id/partnership' element={<Partnership />} />
                <Route path='/set-cookie' element={<SetCookie setIsAuth={setIsAuth}/>} />
                <Route path='/ai' element={<RedirectAI />} />
                <Route path='/player' element={<Player isAuth={isAuth} setIsAuth={setIsAuth}/>} />
            </Routes>
        </main>
    )
}

export default Main