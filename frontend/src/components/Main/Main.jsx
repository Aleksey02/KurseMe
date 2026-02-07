import classes from './Main.module.scss'
import Home from "./Home/Home"
import {Route, Routes} from 'react-router-dom'
import Auth from '../../pages/Auth/Auth'
import Account from '../../pages/Account/Account'
import Partnership from '../../pages/Partnership/Partnership'
import SetCookie from '../../pages/SetCookie/SetCookie'
import RedirectAI from '../../pages/RedirectAI/RedirectAI'
import Player from '../../pages/Player/Player'
import SlivKursov from '../../pages/SlivKursov/SlivKursov'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import { lazy, Suspense } from 'react'

function Main({isAuth, setIsAuth}) {
    const Admin = lazy(() => import('../../pages/Admin/Admin'))
    const Classes = lazy(() => import('../../pages/Admin/Classes'))
    const SchoolAdmin = lazy(() => import('../../pages/Admin/SchoolAdmin'))
    const SubjectAdmin = lazy(() => import('../../pages/Admin/SubjectAdmin'))
    const Links = lazy(() => import('../../pages/Admin/Links'))

    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Admin isAuth={isAuth} setIsAuth={setIsAuth} /> 
                    </Suspense>}
                />
                <Route path='/admin/classes' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Classes isAuth={isAuth} />
                    </Suspense>}
                />
                <Route path='/admin/classes/:classAdmin' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <SchoolAdmin />
                    </Suspense>}
                />
                <Route path='/admin/classes/:classAdmin/:schoolId' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <SubjectAdmin />
                    </Suspense>}
                />
                <Route path='/admin/bot-link' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Links isAuth={isAuth} type="bot"/>
                    </Suspense>}
                />
                <Route path='/admin/channel-link' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Links isAuth={isAuth} type="channel"/>
                    </Suspense>}
                />
                <Route path='/admin/chat-link' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Links isAuth={isAuth} type="chat"/>
                    </Suspense>}
                />
                <Route path='/admin/folder-link' element={
                    <Suspense fallback={<div>Загружается...</div>}>
                        <Links isAuth={isAuth} type="folder"/>
                    </Suspense>}
                />
                <Route path='/auth' element={<Auth setIsAuth={setIsAuth}/>} />
                <Route path='/account' element={<Account isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path='/partnership' element={<Partnership />} />
                <Route path='/set-cookie' element={<SetCookie setIsAuth={setIsAuth}/>} />
                <Route path='/ai' element={<RedirectAI />} />
                <Route path='/player/:title' element={<Player isAuth={isAuth} setIsAuth={setIsAuth}/>} />
                <Route path='/slivy-kursov-ege' element={<SlivKursov/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </main>
    )
}

export default Main