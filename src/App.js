import React, {Suspense} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
/*
import DialogsContainer from "./components/Dialogs/DialogsContainer";
*/
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initializeAppThunkCreator} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = (props) => {
    const dispatch = useDispatch();
    const initialized = useSelector(state => state.app.isInitialized)
    useEffect(() => {
        dispatch(initializeAppThunkCreator());
    }, []);
    if (!initialized) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header/>
                <Navbar/>
                <div className='wrapper-app-content'>
                    <Suspense fallback={<Preloader/>}><Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends/*' element={<Friends/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>;
                    </Routes></Suspense>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
