import React from 'react'
import { Route, Routes } from 'react-router';
import App from '../App';
import Chatpage from '../components/Chatpage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/chat" element={<Chatpage/>}/>
    </Routes>
  )
}

export default AppRoutes;
