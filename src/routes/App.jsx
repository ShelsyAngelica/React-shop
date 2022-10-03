import React from 'react';
import '../styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import CreateNewPassword from '../pages/CreateNewPassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import Login from '../pages/Login'
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount'
import Orders from '../pages/Orders'
import Checkout from '../pages/Checkout'
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/create-new-password' element={<CreateNewPassword/>} />
                        <Route path='/recovery-password' element={<RecoveryPassword/>} />
                        <Route path="*" element={<NotFound/>} />
                        <Route path='/create-account' element={<CreateAccount/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/send-email' element={<SendEmail/>}/>
                        <Route path='/my-account' element={<MyAccount/>}/>
                    </Routes>
                </Layout> 
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;