import React from 'react';
import '../styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import CreateNewPassword from '../containers/CreateNewPassword';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import Login from '../pages/Login'
import NotFound from '../pages/NotFound';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='home' element={<Home/>} />
                    <Route path='login' element={<Login/>}/>
                    <Route path='/create-new-password' element={<CreateNewPassword/>} />
                    <Route path='/recovery-password' element={<RecoveryPassword/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout> 
        </BrowserRouter>
    );
}

export default App;